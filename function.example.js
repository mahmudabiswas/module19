function assimentMark(assimen1, assimen2, assiment3) {
  const assimenResult = assimen1 + assimen2 + assiment3;
  const assimentAvarage = assimenResult / 3;
  return assimentAvarage;
}

const totalMark = assimentMark(60, 53, 44);
console.log(parseInt(totalMark));
