# chart-js-pointer-plugin
ChartJS plugin that allows us to add pointer series of data to bar charts


### Currently only works with horizontalBar
#### Sample options:

```javascript
new Chart(ctx, {
type: 'horizontalBar',
data: barChartData,
options: {
plugins: {
dataPointer: {
fontFamily: 'FontAwesome',
pointer: '\uf063',
label: 'Clifford',
data: ["50", "30", "60"],
}
});
```


### How to use
See /dist/index.html for example
