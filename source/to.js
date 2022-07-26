export default (target, source) => {
  return new URL(target, source).pathname
}
