// var year = 2023;
// var leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; // 是否閏年
// var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// if (leap) monthDay[1] = 29; // 若閏年，則二月有29天

// var meetDateArray = []; // 所有星期四的日期
// var evenDate = []; // 偶數月的第一個星期四的日期
// var oddDate = []; // 奇數月的第一個星期四的日期

// for (var month = 0; month < 12; month++) {
//     var firstWeek = true; // 指示是否是月份的第一個星期四
//     for (var i = 0; i < monthDay[month]; i++) {
//         var date = new Date(year, month, i + 1);
//         if (date.getDay() === 4) { // 檢查是否星期四
//             // 只取得月份和日期
//             var meetDate = (month + 1) + '/' + (i + 1);
//             meetDateArray.push(meetDate);
//             if (firstWeek) {
//                 // 根據月份的奇偶性分類
//                 (month + 1) % 2 === 0 ? evenDate.push(meetDate) : oddDate.push(meetDate);
//                 firstWeek = false;
//             }
//         }
//     }
// }

// var repeatedMeetDateArray = meetDateArray.flatMap(date => [date, date]);

// repeatedMeetDateArray.reverse();

// const topics = ['Abstract', 'Paper'];

// // 結果陣列
// const data = [];

// repeatedMeetDateArray.forEach((date, index) => {
//   data.push({
//     "content_date": date,
//     "content_topic": topics[index % topics.length] // 輪流使用主題
//   });
// });

// var container = document.querySelector('.content_container'); // 假設有一個容器元素包裹內容

// // 建立一個空字串，用於保存組合後的 HTML
// let htmlString = '';

// // 將 names 寫至 content_speaker
// // 這裡我們使用一個指針(index)來追踪 names 陣列的當前位置
// let index = 0; 

// reportTitle.reverse();
// let index_reportTitle = 0

// // 迭代資料陣列，為每個物件建立 HTML 字串
// data.forEach(item => {
//     let content_title = ""
//     if (index === 0) {
//         index_reportTitle = 0
//         content_title =  reportTitle[index_reportTitle].abstract
//     }
//     else if (index === 1) {
//         index_reportTitle = 0
//         content_title =  reportTitle[index_reportTitle].paper
//     }
//     else if (index % 2 === 0) {
//         index_reportTitle = index / 2
//         content_title =  reportTitle[index_reportTitle].abstract
//     }
//     else if (index % 2 === 1) {
//         index_reportTitle = (index - 1) / 2
//         content_title =  reportTitle[index_reportTitle].paper
//     }

//     let content_speaker = names[index]
//     index += 1

//     htmlString += `
//       <div class="content">
//           <div class="content_date">${item.content_date}</div>
//           <div class="content_topic">${item.content_topic}</div>
//           <div class="content_speaker">${content_speaker}</div>
//           <div class="content_title">${content_title}</div>
//       </div>`;
// });
  

// container.innerHTML = htmlString; // 將 HTML 字串寫入容器

// 是否閏年的判斷
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// 取得星期四的日期
const getThursdays = (year) => {
  const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear(year)) monthDay[1] = 29;

  const meetDateArray = [];

  for (let month = 0; month < 12; month++) {
    let firstWeek = true;
    for (let i = 0; i < monthDay[month]; i++) {
      const date = new Date(year, month, i + 1);
      if (date.getDay() === 4) {
        const meetDate = (month + 1) + '/' + (i + 1);
        meetDateArray.push(meetDate);
      }
    }
  }

  return meetDateArray.flatMap(date => [date, date]).reverse();
};

// 創建結果陣列
const createData = (dates, topics) => {
  return dates.map((date, index) => ({
    "content_date": date,
    "content_topic": topics[index % topics.length]
  }));
};

// 創建 HTML 字串
const createHtmlString = (data, names, reportTitle) => {
  let htmlString = '';
  let index = 0;

  data.forEach(item => {
    // const content_title = index % 2 === 0 ? reportTitle[Math.floor(index / 2)].abstract : reportTitle[Math.floor((index - 1) / 2)].paper;
    const content_title = index % 2 === 0 ? reportTitle[Math.floor(index / 2)].paper : reportTitle[Math.floor((index - 1) / 2)].abstract;

    const content_speaker = names[index];

    htmlString += `
      <div class="content">
          <div class="content_date">${item.content_date}</div>
          <div class="content_topic">${item.content_topic}</div>
          <div class="content_speaker">${content_speaker}</div>
          <div class="content_title">${content_title}</div>
      </div>`;

    index += 1;
  });

  return htmlString;
};

const year = 2023;
const dates = getThursdays(year);
// const topics = ['Abstract', 'Paper'];
const topics = ['Paper', 'Abstract'];
const data = createData(dates, topics);
const htmlString = createHtmlString(data, names, reportTitle.reverse());

document.querySelector('.content_container').innerHTML = htmlString; // 將 HTML 字串寫入容器
