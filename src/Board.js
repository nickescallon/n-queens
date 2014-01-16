// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function(){

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (typeof params == "undefined" || params == null) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function(){
      return _(_.range(this.get('n'))).map(function(rowIndex){
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex){
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex){
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex){
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function(){
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex){
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function(){
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex){
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
<<<<<<< HEAD
    // test if a specific row on this board contains a
    hasRowConflictAt: function(rowIndex){
      var row = this.rows()[rowIndex];
      var count = 0;
      for(var i = 0; i<row.length; i++){
        if(row[i]===1){
          count++;
        }
      }
      return count>1; // fixme
=======
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex){
      var row = this.rows(), count = 0;
      for (var i = 0; i < row.length; i++){
        if (row[rowIndex][i] === 1) {
          count += 1;
        }
      }
      return count > 1;
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function(){
<<<<<<< HEAD
      var rows = this.rows();
      for (var i = 0; i < rows.length; i++){
=======
      var size = this.get('n');
      for (var i = 0; i < size; i++) {
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
        if (this.hasRowConflictAt(i)){
          return true;
        }
      }
<<<<<<< HEAD
      return false; // fixme
=======
      return false;
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex){
<<<<<<< HEAD
      var rows = this.rows();
      var count = 0;
      for(var i = 0; i<rows.length; i++){
        count += rows[i][colIndex];
      }
      return count>1; // fixme
=======
      // debugger;
      var cols = this.rows(), count = 0;
      for (var r = 0; r < cols.length; r++){
        if (cols[r][colIndex] === 1) {
          count += cols[r][colIndex];
        }
      }
      return count > 1;
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
    },
    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function(){
<<<<<<< HEAD
      var size = this.get('n');
      for(var i = 0; i < size; i++){
        if(this.hasColConflictAt(i)){
          return true;
        }
      }
      return false; // fixme
=======
      // debugger;
      var size = this.get('n');
      for (var i = 0; i < size; i++) {
        if (this.hasColConflictAt(i)){
          return true;
        }
      }
      return false;
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow){
<<<<<<< HEAD
      var i = majorDiagonalColumnIndexAtFirstRow;
      var maxCalls = Math.abs(i);
      var timesThrough = 0;
      var size = this.get("n");
      var rows = this.rows();
      var count = 0;
      var thisIndex;
      var checkNextSquare = function(){
        if(maxCalls >= size || count>1){
          return count>1;
        } else {
          if(i<0){
            thisIndex = rows[maxCalls][timesThrough];
          } else {
            thisIndex = rows[timesThrough][maxCalls];
          }
          count += thisIndex;
          timesThrough++;
          maxCalls++;
          return checkNextSquare();
        }
      };
      return checkNextSquare();
=======
      var i = majorDiagonalColumnIndexAtFirstRow; 
      var rows = this.rows(), count = 0;
      for (var r = 0; r < rows.length; r++){
        if (i < 0){
          r = Math.abs(i);
          i = 0;
        }
        if (rows[r][i] === 1){
          count += 1;
        }
        i++;
      }
      return count > 1;
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function(){
<<<<<<< HEAD
      var size = this.get('n');
      for(var i = 0; i < size; i++){
        if(this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(0,i))){
          return true;
        }
        if(this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(i,0))){
          return true;
        }
      }
      return false; // fixme
=======
      // debugger;
      var size = this.get('n');
      for (var i = -size; i < size; i++) {
        if (this.hasMajorDiagonalConflictAt(i)){
          return true;
        }
      }
      return false;
>>>>>>> b7da6f98f8ed7a98dcdffea61fa2980cc02765e2
    },




    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow){
      var i = minorDiagonalColumnIndexAtFirstRow;
      var size = this.get("n");
      // var maxCalls = Math.abs(size-1-i);
      var maxCalls = i-(size-1);
      var timesThrough = 0;
      var topCall = i;
      var sideCall = size -1;
      var rows = this.rows();
      var count = 0;
      var thisIndex;
      var checkNextSquare = function(){
        if(maxCalls > size -1 || timesThrough > size -1 || count > 1){
          return count>1;
        } else {
          if(i<4){
            thisIndex = rows[timesThrough][topCall];
            timesThrough++;
            topCall--;
          } else {
            thisIndex = rows[maxCalls][sideCall];
            sideCall--;
            maxCalls++;
          }
          count += thisIndex;
          return checkNextSquare();
        }
      };
      return checkNextSquare();
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function(){
      var size = this.get('n');
      for(var i = 0; i < size; i++){
        if(this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(0,i))){
          return true;
        }
        if(this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(i, size - 1))){
          return true;
        }
      }
      return false; // fixme
    }
    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n){
    return _(_.range(n)).map(function(){
      return _(_.range(n)).map(function(){
        return 0;
      });
    });
  };

}());
