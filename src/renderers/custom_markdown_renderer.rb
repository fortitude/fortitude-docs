class CustomMarkdownRenderer < Hologram::MarkdownRenderer
  def header(text, header_level)
    return "<h#{header_level.to_s} class=\"#{css_class_name}\">#{text}</h#{header_level.to_s}>"
  end

  def block_quote(text)
    return "<blockquote class=\"#{css_class_name}\">#{text}</blockquote>"
  end

  def table(header, body)
    "<table class=\"#{css_class_name}\"> <thead>#{header}</thead> <tbody>#{body}</tbody> </table>"
  end
end