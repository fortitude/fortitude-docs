Hologram::CodeExampleRenderer::Factory.define 'scss' do
  example_template 'scss_example_template'
  table_template 'scss_table_template'
  lexer { Rouge::Lexer.find('scss') }
end
