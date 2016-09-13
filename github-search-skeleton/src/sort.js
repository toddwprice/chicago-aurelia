export class SortValueConverter {
  toView(array, propertyName, direction) {
    var factor = direction === 'ascending' ? 1 : -1;
    return array
      .slice(0)
      .sort((a, b) => {
        console.log('typeof a[propertyName]', typeof a[propertyName]);
        if (typeof a[propertyName] === 'string') {
          return (a[propertyName].toLowerCase() > b[propertyName].toLowerCase()) ? 1 * factor : -1 * factor;
        }
        else {
          return (a[propertyName] - b[propertyName]) * factor;
        }
      });
  }
}
