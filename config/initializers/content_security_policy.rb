Rails.application.config.content_security_policy do |p|
  p.font_src    :self, :https, :data
  p.img_src     :self, :https, :data
  p.object_src  :none
  p.style_src   :self, :https, :unsafe_inline
  p.report_uri  '/csp-violation-report'

  if Rails.env.development?
    p.script_src :self, :https, :unsafe_eval
    p.default_src :self, :https, :unsafe_eval
    p.connect_src :self, :https, 'http://localhost:3001', 'ws://localhost:4000'
  else
    p.script_src :self, :https
    p.default_src :self, :https
  end
end
