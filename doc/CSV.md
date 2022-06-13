function csv_To_Array(str, delimiter = ",") {
    const header_cols = str.slice(0, str.indexOf("\n")).split(delimiter);
    const row_data = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = row_data.map(function (row) {
      const values = row.split(delimiter);
      const el = header_cols.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    // return the array
    return arr;
  }

