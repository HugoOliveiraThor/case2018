import faker from 'faker'

function generateFakeData (quantity) {
  let array = []
  for (let i = 0; i < quantity ; i++) {
    array.push({
      doctor: faker.name.findName(),
      patient: faker.name.findName(),
      chamber: faker.random.number()
    })
  }
  return array
}

export default { generateFakeData }
