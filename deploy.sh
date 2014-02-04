#!/bin/bash

command -v middleman > /dev/null || { echo "middleman is required"; exit 1; }

middleman build
cp .deploy.conf build
cd build

help=$(echo $* | grep -P '(-h|--help)')
rsyncopts="-cavh "

if [ ! -z "$help" ]; then
	echo "FWT mini deployment"
	echo "usage: fwtdeploy [ --opts ]"
	echo ""

	echo "Options:"
	echo "	-h | --help	Display this help page"
	echo "	-t | --test	Do a dry run to see what will happend"
	echo "	--env		Whetever to deploy to the stage enviroment"
	echo "	--server	List of servers to deploy to"
	echo "	--target	The name to deploy to, otherwise the name of current directory will be used"
	echo "	--exclude	List of files to exclude from rsync"
	exit
fi

declare -A args

file=.deploy.conf
if [ ! -e $file ]; then
	 echo "Sorry no $file, difficult to have any fun...";
else
	while read line; do
		[[ ! -z "$line" ]] && args[$(echo $line | awk -F: '{print $1}')]=$(echo $line | awk -F: '{gsub("^ +", "", $2);print $2}')
	done < $file
fi

while [ ! -z "$1" ]; do
	arg=$(echo $1 | grep -P '^--[a-zA-Z0-9_.-]+' | sed 's/--//')
	shift
	[[ $arg == "test" ]] && rsyncopts="${rsyncopts}--dry-run " && continue
	if [[ $arg == "rsh" ]]; then
		export RSYNC_RSH=$1	
	elif [ -z "$arg" ]; then
		continue
	fi

	args[$arg]=$([ ! -z ${args[$arg]}] && echo ${args[$arg]})$1
	shift
done

[ -z ${args["target"]} ] && args["target"]=$(basename $(pwd))

req="server env target"
fail=0

for cond in $req; do
	[ -z "${args[$cond]}" ] && echo "You need to specify '${cond}' parameter" && fail=1
done

[[ $fail == 1 ]] && exit

echo "Deploying with following settings:"
echo "----------------------------------"
echo ""

for k in ${!args[@]}; do
	echo "$k: ${args[$k]}" | awk -F: '{$1=$1":";printf("%-20s%s\r\n", $1, $2)}'
done

exclude="--exclude .git*"

for exc in ${args["exclude"]}; do
	exclude="--exclude ${exc} $exclude"
done

echo ${args["target"]} | grep -P '^[^/]' && args["target"]="${args[env]}/${args["target"]}"

for server in ${args["server"]}; do
	echo "Deploying to server: $server"
	shell=${args["rsh"]:-ssh}
	deptarget=${FWTDEPTARGET:-$($shell $server "[ -e .profile ] && . .profile; echo \$FWTDEPTARGET")}

	if [ ! -z "$deptarget" ]; then
		deptarget="$deptarget/"
	fi

	args["target"]=$deptarget${args["target"]}
	echo "rsync $rsyncopts $exclude --delete-after * $server:${args[target]}"
	echo ""
	rsync $rsyncopts $exclude --delete-after * $server:${args[target]}
done
