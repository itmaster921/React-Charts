



export function createMaxMinArray(props) {
  let mmArray = {minX: undefined, minY: undefined, maxX: undefined, maxY: undefined}

  //get overall max/min across all series.
  mmArray = props.xySeries.reduce((acc, object) => {

    //get max/min for one series
    let minMaxArray = object.data.reduce((acc2, obj2) => {
      acc2.minX = ( acc2.minX === undefined || obj2.x < acc2.minX ) ? obj2.x : acc2.minX
      acc2.minY = ( acc2.minY === undefined || obj2.y < acc2.minY ) ? obj2.y : acc2.minY
      acc2.maxX = ( acc2.maxX === undefined || obj2.x > acc2.maxX ) ? obj2.x : acc2.maxX
      acc2.maxY = ( acc2.maxY === undefined || obj2.y > acc2.maxY ) ? obj2.y : acc2.maxY
      return acc2;
    }, acc);

    return minMaxArray;
  }, mmArray);

  mmArray.maxY = parseInt(mmArray.maxY);
  mmArray.maxX = parseInt(mmArray.maxX);
  mmArray.minY = parseInt(mmArray.minY);
  mmArray.minX = parseInt(mmArray.minX);

  let rangeY = mmArray.maxY - mmArray.minY;
  let rangeX = mmArray.maxX - mmArray.minX;

  //get 5% of ranges
  let rangeYPadding = rangeY / 20;
  let rangeXPadding = rangeX / 20;

  mmArray.maxX = mmArray.maxX + rangeXPadding;
  mmArray.maxY = mmArray.maxY + rangeYPadding;

  mmArray.minY = mmArray.minY - rangeYPadding;
  mmArray.minX = mmArray.minX - rangeXPadding;

  return mmArray;
};