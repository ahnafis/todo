// A simple implementation of Command Design Pattern.

export default interface Command<Param, Return> {
  execute(parameter: Param): Return;
}
