const Cube = require("./../models/Cube");
const cubes = [];

exports.create = async (cubeData) => {
  //1 variant
  const cube = await Cube.create(cubeData);
  return cube;

  //2 variant
  // const cube = new Cube(cubeData);
  // await cube.save()

  // const newCube = {
  //   id: uniqid(),
  //   ...cubeData,
  // };

  // cubes.push(newCube);
  // return newCube;
};

exports.getAll = async (search, from, to) => {
  // let filterCubes = [...cubes];
  let filterCubes = await Cube.find().lean();

  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }

  if (to) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }

  return filterCubes;
};

exports.getSingleCube = (id) => Cube.findById(id).populate("accessories");
//return cubes.find((cube) => cube.id === id);

exports.attachAccessory = async (cubeId, accessoryId) => {
  // return Cube.findByIdAndUpdate(cubeId, {
  //   $push: { accessories: accessoryId },
  // });
  const cube = await this.getSingleCube(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save();
};

exports.update = (id, cubeData) => Cube.findByIdAndUpdate(id, cubeData);

exports.delete = (id) => Cube.findByIdAndDelete(id);