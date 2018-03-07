import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart } from "primeng/primeng";
import {Observable} from 'rxjs/Observable';
import '../rxjs-operators';



const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']


@Component({
  selector: 'at-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild("mixedChart") mixedChart: UIChart;

  hoursByProject = [
    { id: 1, name: 'Unreached', hoursSpent: 11 },
    { id: 2, name: 'Tested', hoursSpent: 39 },
    { id: 3, name: 'Untested', hoursSpent: 50 },
  ]

  hoursByProject2 = [
    { id: 1, name: 'In Progress', hoursSpent: 58 },
    { id: 2, name: 'Test Complete', hoursSpent: 1001 },
  ]

  chartOptions = {
    title: {
      display: true,
      text: 'YTD Tested Percentage'
    },
    legend: {
      position: 'bottom'
    },
  };

  pieLabels = this.hoursByProject.map((proj) => proj.name);
  pieLabels2 = this.hoursByProject2.map((proj) => proj.name);

  pieData = this.hoursByProject.map((proj) => proj.hoursSpent);
  pieData2 = this.hoursByProject2.map((proj) => proj.hoursSpent);

  pieColors = this.configureDefaultColours(this.pieData);


  private configureDefaultColours(data: number[]): string[] {
    let customColours = []
    if (data.length) {

      customColours = data.map((element, idx) => {
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      });
    }

    return customColours;
  }



  hoursByProjectChartData = {
    labels: this.pieLabels,
    datasets: [
      {
        data: this.pieData,
        backgroundColor: this.pieColors
      }
    ]
  }

  hoursByProjectChartData2 = {
    labels: this.pieLabels2,
    datasets: [
      {
        data: this.pieData2,
        backgroundColor: this.pieColors
      }
    ]
  }


  hoursByTeamChartData = {

    labels: ['L/Q', 'DOT', 'HRP', 'SHRP', 'NED', 'PFC'],
    datasets: [
      {
        label: 'Untested',
        backgroundColor: DEFAULT_COLORS[0],
        data: [61, 59, 30, 55, 67, 73]
      },
      {
        label: 'Tested',
        backgroundColor: DEFAULT_COLORS[1],
        data: [39, 41, 70, 45, 33, 27]
      }
    ]

  }

  hoursByTeamChartDataMixed = {

    labels: ['3/1', '3/2', '3/5', '3/6', '3/7', '3/8'],
    datasets: [
      {
        label: 'Tested',
        type: 'line',
        backgroundColor: DEFAULT_COLORS[1],
        data: [15, 19, 20, 13, 28, 27]
      },
      {
        label: 'Selected',
        type: 'line',
        backgroundColor: DEFAULT_COLORS[0],
        data: [25, 26, 30, 25, 35, 33]
      }
    ]

  }

  onDataSelect(event) {

    let dataSetIndex = event.element._datasetIndex;
    let dataItemIndex = event.element._index;

    let labelClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].label;
    let valueClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].data[dataItemIndex];

    alert(`Looks like ${labelClicked} worked ${valueClicked} hours`);
  }


  ngAfterViewInit() {
    Observable.interval(3000).timeInterval().subscribe(() => {

      var hoursByTeam = this.hoursByTeamChartDataMixed.datasets;
      var randomised = hoursByTeam.map((dataset) => {

        dataset.data = dataset.data.map((hours) => hours * (Math.random() * 2));

      });
      this.mixedChart.refresh();
    });

  }



}
