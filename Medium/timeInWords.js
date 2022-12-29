// https://www.hackerrank.com/challenges/the-time-in-words/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function timeInWords(h, m) {
  let hour = numberToWord(h);

  if (m === 0) return `${hour} o' clock`;
  if (m === 1) return `one minute past ${hour}`;
  if (m === 15) return `quarter past ${hour}`;
  if (m === 30) return `half past ${hour}`;
  if (m < 30) return `${numberToWord(m)} minutes past ${hour}`;

  if (m > 30) {
    if (m === 45) return `quarter to ${numberToWord(h + 1)}`;
    else return `${numberToWord(60 - m)} minutes to ${numberToWord(h + 1)}`;
  }
}

const numberToWord = (n) => {
  switch (n) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
    case 20:
      return 'twenty';
    case 21:
      return 'twenty one';
    case 22:
      return 'twenty two';
    case 23:
      return 'twenty three';
    case 24:
      return 'twenty four';
    case 25:
      return 'twenty five';
    case 26:
      return 'twenty six';
    case 27:
      return 'twenty seven';
    case 28:
      return 'twenty eight';
    case 29:
      return 'twenty nine';
  }
};
