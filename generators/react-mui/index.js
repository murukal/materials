const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  async prompting() {
    this.options = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your package name?',
        validate: (input) => /[(a-z)|/-]+/.test(input)
      },
      {
        type: 'input',
        name: 'description',
        message: 'what is your package description?'
      }
    ])
  }

  async writting() {
    this.log(this.fs.read(this.templatePath()))
    this.fs.copy(this.templatePath('.'), this.destinationPath('.'))
  }
}
