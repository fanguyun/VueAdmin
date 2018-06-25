export const option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            hoverAnimation: true,
            symbol: 'rect',
            symbolSize: [120, 35],
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['arrow','circle'],
            edgeSymbolSize: [8, 2],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '开始',
                x: 100,
                y: 200
            }, {
                name: '公文发行',
                x: 100,
                y: 250
            }, {
                name: '处长审核',
                x: 100,
                y: 300
            }, {
                name: '是否会签',
                x: 100,
                y: 350
            }, {
                name: '办公室修审',
                x: 100,
                y: 400
            },
            {
                name: '是否补充会签',
                x: 100,
                y: 450
            },
                {
                    name: '签发',
                    x: 100,
                    y: 500
                },
                {
                    name: '登记放号',
                    x: 100,
                    y: 550
                },
                {
                  name: '文印室',
                  x: 100,
                  y: 600
                },
                {
                  name: '机要员',
                  x: 100,
                  y: 650
                },
                {
                    name: '归档',
                    x: 100,
                    y: 700
                },
                {
                  name: '结束',
                  x: 100,
                  y: 750
                }
            ],
            // links: [],
            links: [{
                source: '开始',
                target: '公文发行'
            }, {
                source: '公文发行',
                target: '处长审核'
            }, {
                source: '处长审核',
                target: '是否会签'
            }, {
                source: '是否会签',
                target: '办公室修审'
            }, {
                source: '办公室修审',
                target: '是否补充会签'
            },{
                source: '是否补充会签',
                target: '签发'
                }, {
                    source: '签发',
                    target: '登记放号'
                },
                {
                    source: '登记放号',
                    target: '文印室'
                },
                {
                  source: '文印室',
                  target: '机要员'
                },
                {
                  source: '机要员',
                  target: '归档'
                },
                {
                    source: '归档',
                  target: '结束'
                }
            ],
            lineStyle: {
                normal: {
                    opacity: 0.8,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};
