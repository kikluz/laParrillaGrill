# -*- encoding: utf-8 -*-
# stub: soundcloud 0.3.4 ruby lib

Gem::Specification.new do |s|
  s.name = "soundcloud".freeze
  s.version = "0.3.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.5".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Johannes Wagener".freeze, "Erik Michaels-Ober".freeze]
  s.date = "2016-09-27"
  s.description = "The official SoundCloud API wrapper. It provides simple methods to handle authorization and to execute HTTP calls.".freeze
  s.email = ["api@soundcloud.com".freeze]
  s.homepage = "https://dev.soundcloud.com".freeze
  s.rubygems_version = "3.1.2".freeze
  s.summary = "The official SoundCloud API wrapper.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<httmultiparty>.freeze, ["~> 0.3.0"])
    s.add_runtime_dependency(%q<hashie>.freeze, [">= 0"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.0"])
  else
    s.add_dependency(%q<httmultiparty>.freeze, ["~> 0.3.0"])
    s.add_dependency(%q<hashie>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.0"])
  end
end
