require 'kramdown'

module ApplicationHelper
  def markdown(text)
    Kramdown::Document.new(text, input: 'GFM').to_html.html_safe
  end
end
