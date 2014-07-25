page "/sitemap.xml", :layout => false

require 'slim'

activate :gzip
activate :livereload

set :js_dir, 'assets/javascripts'
set :css_dir, 'assets/stylesheets'
set :images_dir, 'assets/images'

# Add bower's directory to sprockets asset path
after_configuration do

  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]

end

# Build-specific configuration
configure :build do

  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :favicon_maker

  activate :sitemap, :hostname => data.settings.site.url
end
