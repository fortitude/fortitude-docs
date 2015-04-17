Hologram::CodeExampleRenderer::Factory.define 'html_preview' do
  example_template 'markup_preview_example_template'
  table_template 'markup_preview_table_template'
  lexer { Rouge::Lexer.find('html') }
end
