Encoding.default_external = 'utf-8'

LANGUAGE = (ENV['TS_DOCS_LANG'] || 'en').to_sym
puts "TS_DOCS_LANG=#{LANGUAGE}"
I18n.locale = I18n.default_locale = LANGUAGE
I18n.load_path = Dir[File.expand_path(File.join(File.dirname(__FILE__), '..', 'source', 'languages', LANGUAGE.to_s, "#{LANGUAGE.to_s}.yml"))]

if ENV['TS_VERSION'].blank? || ENV['TS_VERSION'] !~ /[\d\.rc]+/
  versions = YAML::load(File.open('data/versions.yml'))
  for proj, vs in versions['currents']
    proj = proj.upcase.gsub(/-/, '_')
    ENV["#{proj}_VERSION"] = vs
    puts "#{proj}_VERSION=#{ENV["#{proj}_VERSION"]}"
  end
end

$versions = {
  :'tiny-solution' => ENV['TS_VERSION'].presence,
}
$default_project = 'tiny-solution'

#%w{versionify production_check index
%w{production_check index
  sitemap_render_override duals helpers downloads}.each do |lib|
  require File.join(File.dirname(__FILE__), lib)
end
