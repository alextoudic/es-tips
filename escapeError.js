export default block => {
  try {
    block()
  } catch (error) {
    console.error(error)
  }
}
