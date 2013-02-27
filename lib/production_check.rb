# change to verify... pass in a block that gets executed, and raises exception if false

$production = false
module ::Middleman::Features::ProductionCheck
  class << self
    def registered(app)
      $production = true
      raise "TS_VERSION required to deploy" unless $versions[:'tiny-solution']
    end
  end
end

::Middleman::Extensions.register(:production_check, ::Middleman::Features::ProductionCheck)
