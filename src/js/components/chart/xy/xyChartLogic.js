import Immutable from 'immutable';


export const xyChartLogic = {

  path() {
    return ['app', 'xy'];
  },

  getSeries(appState) {
    return appState.xy.series;
  },

  changeXYPoint(imState, action) {
    let list = imState.getIn(['series']);

    let updatedList = list.update(
      list.findIndex((item) => {
        return item.get("name") === action.name;
      }), (item) => {
        return item.set("shape", action.point);
      }
    );
    imState = imState.setIn(['series'], updatedList);
    return imState;
  },

  changeXYColor(imState, action) {
    let list = imState.getIn(['series']);

    let updatedList = list.update(
      list.findIndex((item) => {
        return item.get("name") === action.name;
      }), (item) => {
        return item.set("color", action.color);
      }
    );
    imState = imState.setIn(['series'], updatedList);
    return imState;
  },


  changeXYChartName(imState, action) {
    imState = imState.setIn(['name'], action.name)
    return imState;
  },


  changeXYSeriesName(imState, action) {
    let list = imState.getIn(['series']);

    let updatedList = list.update(
      list.findIndex((item) => {
        return item.get("name") === action.name;
      }), (item) => {
        return item.set("name", action.newName);
      }
    );
    imState = imState.setIn(['series'], updatedList);
    return imState;
  },

  deleteXYSeries(imState, action) {
    let list = imState.getIn([...this.path, 'series'])

    list = list.filter(function (elem) {
      return elem.get("name") !== action.name
    })
    imState = imState.setIn([...this.path, 'series'], list)

    return imState;
  },

  createXYSeries(imState, action) {


    let series = imState.getIn([...this.path, 'series'])
    series = Immutable.List(series);

    series = series.push(
      {
        name: action.name,
        color: action.color,
        data: [{"x":0,"y":0}]
      },
    );


    // var v = Immutable.fromJS(series)
    imState = imState.setIn([...this.path, 'series'], series)

    console.info(JSON.stringify(imState.toJS()))

    return imState;
  },



  changeCellXY(imState, action) {

    let seriesList = imState.getIn([...this.path, 'series'])

    console.info("action " + action.name)

    let idxSeriesItem = seriesList.findIndex((elem) => {
      return elem.get("name") === action.seriesName
    })

    let singlelistItem = seriesList.filter((elem, i) => {
      return elem.get("name") === action.seriesName
    })

    singlelistItem = singlelistItem.get(0);

    let l = singlelistItem.toJS();
    console.log(l);

    singlelistItem = singlelistItem.updateIn(['data'], function(list){
      var idx = list.findIndex(function(item, i){ //index?
        if(i == action.row)
          return true;
      });
      return list.setIn([idx, action.axis], action.value);
    });

    singlelistItem = this.sortDataOnX(singlelistItem);

    seriesList = seriesList.setIn([idxSeriesItem], singlelistItem);

    imState = imState.setIn([...this.path, 'series'], seriesList);

    return imState;
  },


  deleteDataPair(imState, action) {

    let seriesList = imState.getIn([...this.path, 'series'])
    let idxSeriesItem = seriesList.findIndex((elem) => {
      return elem.get("name") === action.name
    });
    let singlelistItem = seriesList.filter((elem, i) => {
      return elem.get("name") === action.name
    });



    //should be just ONE item
    singlelistItem = singlelistItem.get(0);

    singlelistItem = singlelistItem.updateIn(['data'], function(list){
      // list = list.remove(["x","1"]);

      list = list.filter((item) => item.get('x') !== action.xValue);


      return list;
      // list.push(Immutable.Map({x:action.xValue, y:action.yValue}));
    });


    seriesList = seriesList.setIn([idxSeriesItem], singlelistItem);
    imState = imState.setIn([...this.path, 'series'], seriesList);

    return imState;
  },


  addDataPair(imState, action) {
    let seriesList = imState.getIn([...this.path, 'series'])

    let idxSeriesItem = seriesList.findIndex((elem) => {
      return elem.get("name") === action.name
    });

    let singlelistItem = seriesList.filter((elem, i) => {
      return elem.get("name") === action.name
    });

    console.info(" ----- " + JSON.stringify(singlelistItem.toJS()))

    //should be just ONE item
    singlelistItem = singlelistItem.get(0);


    singlelistItem = singlelistItem.updateIn(['data'], function(list){
      return list.push(Immutable.Map({x:action.xValue, y:action.yValue}));
    });


    singlelistItem = this.sortDataOnX(singlelistItem);

    seriesList = seriesList.setIn([idxSeriesItem], singlelistItem);
    imState = imState.setIn([...this.path, 'series'], seriesList);

    return imState;
  },


  sortDataOnX(singlelistItem) {
    singlelistItem = singlelistItem.updateIn(['data'], function(list){
      let sortedList = list.sort(function(lhs, rhs) {
        console.info("lhs " + lhs)
        if (Number(lhs.get("x")) > Number(rhs.get("x"))) {
          return 1;
        }
        return -1;
      });
      return sortedList;
    });
    return singlelistItem;
  }



}


