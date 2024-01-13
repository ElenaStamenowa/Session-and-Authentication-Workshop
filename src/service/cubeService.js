const uniqid = require("uniqid");
const cubes = [
  // {
  //   name,
  //   description,
  //   imageUrl,
  //   difficultyLevel,
  // },
  // {
  //   name,
  //   description,
  //   imageUrl,
  //   difficultyLevel,
  // },
  // {
  //   name,
  //   description,
  //   imageUrl,
  //   difficultyLevel,
  // },
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);
  return newCube;
};

exports.getAll = (search, from, to) => {
  let filterCubes = [...cubes];

  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search)
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
};

exports.getSingleCune = (id) => {
  return cubes.find((cube) => cube.id === id);
};
