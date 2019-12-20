;(async () => {
  const { sum } = await import('../pkg/index')
  const result = sum(new Float64Array([1.0, 2.0, 3.0]))
  console.log(`Result: ${result}`)
})()


