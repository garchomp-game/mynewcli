import {Args, Command} from '@oclif/core'

export default class Greet extends Command {
  static args = {
    name: Args.string({
      description: 'Name of the person to greet',
      required: true,
    }),
  }

  static description = 'Greet someone'

  static examples = [`$ mynewcli greet Alice`]

  static flags = {}

  async run() {
    const {args} = await this.parse(Greet)
    this.log(`Hello ${args.name}!`)
  }
}
