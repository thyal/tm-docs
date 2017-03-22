(function() {
  var utils = {};

  utils.toPaddedHex = function(n) {
    return "0x" + ("0" + n.toString(16)).slice(-2);
  };

  utils.parseDecAddress = function(addr) {
    return parseInt(addr, 10)
  };

  utils.nonEmpty = function(x) { return x !== ''}

  // parses addresses
  utils.parseHexAddress = function(addr) {
    var
      sides = addr.split(/::+/),
      left = sides.slice(0, sides.length - 1).join(':').split(':').filter( utils.nonEmpty ),
      right = sides[sides.length - 1].split(":").filter( utils.nonEmpty ),
      results = ['0','0','0','0']

      if (left.length + right.length > 4) {
        return NaN;
      }

      var offset = right.length >= 0 ? 0 : results.length - left.length
      for (var i = 0; i < left.length; i++) {
        results[offset + i] = left[i]
      }

      var n = results.length
      for (var i = right.length - 1; i >= 0; i--) {
        results[--n] = right[i];
      }


      for (var n = 0; n < results.length; n++) {
        results[n] = parseInt(results[n], 16);

        if (isNaN(results[n])) {
          return NaN;
        }
      }

      return (results[0] << 24) + (results[1] << 16) + (results[2] << 8) + results[3];
  };

  utils.parseBinAddress = function(addr) {
    var parts = ["0", "0", "0", "0"]
      .concat(addr.split('.'))
      .filter( utils.nonEmpty )
      .slice(-4);


    for (var i = 0; i < parts.length; i++) {
      parts[i] = parseInt(parts[i], 10);

      if (isNaN(parts[i])) {
        return NaN;
      }
    }

    return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
  };

  utils.parseB36Address = function(addr) {
    return parseInt(addr, 36);
  };


  utils.parseAddress = function(addr) {
    addr = addr.toString();
    if (addr.match(/^[0-9]*$/)) {
      return utils.parseDecAddress(addr);
    } else if (addr.match(/^[0-9:a-fA-F]*$/)) {
      return utils.parseHexAddress(addr);
    } else if (addr.match(/^[0-9.]*$/)) {
      return utils.parseBinAddress(addr);
    } else if (addr.match(/^[0-9A-Z]*$/)) {
      return utils.parseB36Address(addr);
    }
  };

  var uaparser

  utils.connectURL = "https://release.tiny-mesh.com/tinymesh/guri";

  var _archMap = {
    'ia32': '386'
  };

  var _prettyArchMap = {
    'ia32': '32bit',
    'amd64': '64bit',
  };

  var _platformMap = {
    'win32': 'windows',
    'mac':   'darwin',
  };

  utils.archMap = function(arch) {
    return _archMap[arch] || arch;
  };

  utils.prettyArchMap = function(arch) {
    return _prettyArchMap[arch] || arch;
  };

  utils.platformMap = function(platform) {
    return _platformMap[platform] || platform;
  };

  utils.platformTarget = function(id) {
    var elem = document.getElementById(id);

    if (!elem)
      return;

    if (!utils.uaparser)
      uaparser = new UAParser();

    var
      hostOs = uaparser.getOS().name.toLowerCase().replace(' ', '-'),
      hostArch = uaparser.getCPU().architecture,
      os = hostOs,
      arch = hostArch,
      hash = window.location.hash.match(/^#platform=(.*?)$/);

    if (hash && hash[1]) {
      os = hash[1];
    } else if (!hash && (os !== 'windows' && os !== 'linux' && os !== 'mac-os')) {
      os = 'source';
    }

    var classes = [
      "target",
      "target-os-" + os,
      "target-arch-" + arch,
      "host-os-" + hostOs,
      "host-arch-" + hostArch
    ];



    if (hostOs !== os)
      classes = classes.concat(['targetted-platform'])

    elem.className = classes.join(' ');

    // set download links
    var
      targetArch = document.getElementById('target-arch'),
      targetLink = document.getElementById('target-link');

    if (targetArch)
      targetArch.innerHTML = '(' + utils.prettyArchMap(arch).toUpperCase() + ')';

    if (targetLink)
      targetLink.href = utils.connectURL + '/' + utils.platformMap(os) + '/' + utils.archMap(arch) + '?download=true'
  };


  window.utils = utils;


  var configTools = {};
  configTools.setNID = function(parts, ids) {
    var elems = [
      document.getElementById(ids[0]),
      document.getElementById(ids[1]),
      document.getElementById(ids[2]),
      document.getElementById(ids[3])
    ];

    if (!elems[0]) new Error("no such element (0) " + ids[0] + " in configTools.setNID/2");
    if (!elems[1]) new Error("no such element (1) " + ids[1] + " in configTools.setNID/2");
    if (!elems[2]) new Error("no such element (2) " + ids[2] + " in configTools.setNID/2");
    if (!elems[3]) new Error("no such element (3) " + ids[3] + " in configTools.setNID/2");

    elems[0].innerHTML = utils.toPaddedHex(parts[0]);
    elems[1].innerHTML = utils.toPaddedHex(parts[1]);
    elems[2].innerHTML = utils.toPaddedHex(parts[2]);
    elems[3].innerHTML = utils.toPaddedHex(parts[3]);
  };

  configTools.handleNID = function(inputID, outputIDs, errID) {
    var
      addr,
      inputElem = document.getElementById(inputID),
      errElem =  document.getElementById(errID);

    if (!inputID) {
      throw new Error("no input element given in configTools.handleNID/2");
    } else if (!outputIDs || "[object Array]" !== Object.prototype.toString.call(outputIDs) || 4 !== outputIDs.length) {
      throw new Error("outputElems expected an array with exactly 4 elements in configTools.handleNID/2");
    } else if (null === inputElem) {
      throw new Error("no such input element " + inputID + " in configTools.handleNID/2");
    } else if (null === errElem) {
      throw new Error("no such element " + errID + " in configTools.handleNID/2");
    }

    if (inputElem.value.match(/^[0-9]+$/)) {
      addr = parseInt(inputElem.value, 10);
      configTools.setNID([(addr >> 24) & 255, (addr >> 16) & 255, (addr >> 8) & 255, (addr >> 0) & 255], outputIDs);
      errElem.innerHTML = "";
    } else {
      configTools.setNID([0, 0, 0, 0], outputIDs);
      errElem.innerHTML = "Invalid address, enter numbers only";
    }
  };

  window.configTools = configTools;
})()
