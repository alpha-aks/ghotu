/**
 * GYUTO TANTRIC MONASTERY - ANNUAL CALENDAR 2026-2027
 * Tibetan Royal Year 2153, 17th Rabjung Fire Horse Year (རབ་བྱུང་ ༡༧ པའི་མེ་རྟ་ལོ།)
 * Complete digital calendar transcribed from the official monastery calendar publication
 * (Pages 3 through 14 of the Gyuto Monastery 2026 Calendar).
 */

export const CALENDAR_METADATA = {
  yearGregorian: '2026 - 2027',
  tibetanYear: 'བོད་རྒྱལ་ལོ་ ༢༡༥༣',
  tibetanElementYear: 'རབ་བྱུང་ ༡༧ པའི་མེ་རྟ་ལོ།',
  tibetanElementYearEn: '17th Rabjung Fire Horse Year (2026–2027)',
  titleEn: 'Gyuto Tantric Monastery Calendar 2026–2027',
  titleTb: 'གསང་ཆེན་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ལོ་ཐོ།',
  location: 'P.O. Sidhbari - 176215, Dharamshala, Kangra Dist., H.P., India',
  email: 'gyutomonastery@yahoo.com'
};

export const WEEKDAYS = [
  { key: 'SUN', nameEn: 'Sunday', shortEn: 'SUN', nameTb: 'གཟའ་ཉི་མ།', shortTb: 'ཉི', color: '#DC2626' },
  { key: 'MON', nameEn: 'Monday', shortEn: 'MON', nameTb: 'གཟའ་ཟླ་བ།', shortTb: 'ཟླ', color: '#16A34A' },
  { key: 'TUE', nameEn: 'Tuesday', shortEn: 'TUE', nameTb: 'གཟའ་མིག་དམར།', shortTb: 'མིག', color: '#EA580C' },
  { key: 'WED', nameEn: 'Wednesday', shortEn: 'WED', nameTb: 'གཟའ་ལྷག་པ།', shortTb: 'ལྷག', color: '#0284C7' },
  { key: 'THU', nameEn: 'Thursday', shortEn: 'THU', nameTb: 'གཟའ་ཕུར་བུ།', shortTb: 'ཕུར', color: '#2563EB' },
  { key: 'FRI', nameEn: 'Friday', shortEn: 'FRI', nameTb: 'གཟའ་པ་སངས།', shortTb: 'སངས', color: '#9333EA' },
  { key: 'SAT', nameEn: 'Saturday', shortEn: 'SAT', nameTb: 'གཟའ་སྤེན་པ།', shortTb: 'སྤེན', color: '#1E293B' }
];

export const MONTHS_DATA = [
  // ==========================================
  // MONTH 1 (Page 3 of PDF)
  // ==========================================
  {
    monthIndex: 1,
    tibetanMonth: 'བོད་ཟླ་དང་པོ།',
    tibetanMonthSub: '(མཆུ་ཟླ། བཀྲིས་ཟླ་བ།)',
    westernRange: 'February – March 2026',
    coverCaption: '༄༅།།ཕྱི་ལོ་༢༠༢༥ ཟླ་ ༤ ཚེས་ ༢༢ ཉིན་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ར་ཆེ་གཉིས་པའི་གཙུག་ལག་ཁང་དུ་༸སྐྱབས་རྗེ་སློབ་དཔོན་ཟམ་གདོང་རིན་པོ་ཆེ་མཆོག་གིས་ཤེས་རབ་སྙིང་པོའི་བཀའ་ཁྲིད་གནང་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Prof. Samdhong Rinpoche conferring the Heart Sutra teaching at the Second Ramoche Temple of Gyuto Tantric Monastery.',
    startDayOfWeek: 3, // Wednesday (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat)
    days: [
      { tibNum: '༡', gregDay: 18, gregMonth: 'Feb', element: 'མགྲོན།', tag: 'Losar Day 1', isSpecial: true },
      { tibNum: '༢', gregDay: 19, gregMonth: 'Feb', element: 'ཚོང༌།', tag: 'Losar Day 2', isSpecial: true },
      { tibNum: '༣', gregDay: 20, gregMonth: 'Feb', tag: 'Losar Day 3', isSpecial: true },
      { tibNum: '༤', gregDay: 21, gregMonth: 'Feb' },
      { tibNum: '༥', gregDay: 22, gregMonth: 'Feb' },
      { tibNum: '༦', gregDay: 23, gregMonth: 'Feb', element: 'མཁར།' },
      { tibNum: '༨', gregDay: 24, gregMonth: 'Feb', chad: '༧ཆད།', note: 'Tibetan 7th omitted (Chad)' },
      { tibNum: '༩', gregDay: 25, gregMonth: 'Feb' },
      { tibNum: '༡༠', gregDay: 26, gregMonth: 'Feb' },
      { tibNum: '༡༡', gregDay: 27, gregMonth: 'Feb', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 28, gregMonth: 'Feb', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 1, gregMonth: 'Mar', element: 'ཡན་ཀྭོང༌།', inauspicious: 'ཉི་ནག' },
      { tibNum: '༡༤', gregDay: 2, gregMonth: 'Mar' },
      { tibNum: '༡༥', gregDay: 3, gregMonth: 'Mar', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Chotrul Duchen', isSpecial: true },
      { tibNum: '༡༦', gregDay: 4, gregMonth: 'Mar', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 5, gregMonth: 'Mar', element: 'བག' },
      { tibNum: '༡༨', gregDay: 6, gregMonth: 'Mar', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 7, gregMonth: 'Mar', tag: 'Dhugkar Torchen', isSpecial: true },
      { tibNum: '༢༠', gregDay: 8, gregMonth: 'Mar' },
      { tibNum: '༢༡', gregDay: 9, gregMonth: 'Mar', element: 'མགྲོན་ཉི་ནག' },
      { tibNum: '༢༢', gregDay: 10, gregMonth: 'Mar', element: 'ཚོང༌།', tag: 'Tibetan Uprising Day', isSpecial: true },
      { tibNum: '༢༣', gregDay: 11, gregMonth: 'Mar' },
      { tibNum: '༢༤', gregDay: 12, gregMonth: 'Mar' },
      { tibNum: '༢༥', gregDay: 13, gregMonth: 'Mar', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༢༦', gregDay: 14, gregMonth: 'Mar', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 15, gregMonth: 'Mar', element: 'བག' },
      { tibNum: '༢༨', gregDay: 16, gregMonth: 'Mar', element: 'དུར།', tag: 'Kangyur Recitation' },
      { tibNum: '༢༩', gregDay: 17, gregMonth: 'Mar', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༣༠', gregDay: 18, gregMonth: 'Mar', inauspicious: 'ཞག་ངན།' }
    ],
    events: [
      {
        tibetan: '༡ བོད་རྒྱལ་ལོ་ ༢༡༥༣ རབ་གནས་མེ་རྟ་ལོའི་གནམ་ལོ་གསར་ཚེས།',
        english: 'Tibetan New Year (Losar) – February 18, 19, 20',
        date: 'Feb 18–20'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༡ ཚེས་ ༡༥ ལ་ཆོ་འཕྲུལ་དུས་ཆེན།',
        english: 'The Great Festival, celebrating Buddha\'s super-conventional feats (Chotrul Duchen) – March 3',
        date: 'March 3'
      },
      {
        tibetan: '༣ ཕྱི་ཟླ་ ༣ ཚེས་ ༡༠ ལ་བོད་མིའི་རང་དབང་སྒེར་ལངས་དུས་དྲན།',
        english: 'Tibetan Uprising Day – March 10',
        date: 'March 10'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༡ ཚེས་ ༡༩ ལ་གདུགས་དཀར་གཏོར་ཆེན།',
        english: 'Dhugkar Torchen (The Great Ritual Prayer of Sitatapatra / The White Umbrella Deity) – March 7',
        date: 'March 7'
      },
      {
        tibetan: '༥ བོད་ཟླ་ ༡ ཚེས་ ༢༨ བཀའ་འགྱུར་ལྗགས་ཀློག',
        english: 'Yearly Recitation of Sacred Buddha\'s Teachings consisting of 108 Vol. (Kangyur) – March 1–16',
        date: 'March 1–16'
      }
    ]
  },

  // ==========================================
  // MONTH 2 (Page 4 of PDF)
  // ==========================================
  {
    monthIndex: 2,
    tibetanMonth: 'བོད་ཟླ་གཉིས་པ།',
    tibetanMonthSub: '(དབོ་ཟླ།)',
    westernRange: 'March – April 2026',
    coverCaption: '༈ ཡོངས་ཀྱི་དགེ་བའི་བཤེས་གཉེན་ཆེན་པོ་རྡོ་རྗེ་འཛིན་པ་མཁས་གྲུབ་ནོར་བཟང་མཆོག་གིས་ཆོས་ཐོག་དགེ་བཤེས་རྣམས་ལ་གསང་སྔགས་རྡོ་རྗེ་ཐེག་པའི་གཞུང་ལུགས་ཁག་གི་དཔེ་ཁྲིད་གནང་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Venerable Geshe Khedrub Norzang conferring textual instructions on the Secret Vajrayana Tantra treatises to Geshes.',
    startDayOfWeek: 4, // Thursday
    days: [
      { tibNum: '༡', gregDay: 19, gregMonth: 'Mar', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 20, gregMonth: 'Mar', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 21, gregMonth: 'Mar', tag: 'དཔྱིད་ཉིན་མཚན་མཉམ། Spring Equinox' },
      { tibNum: '༤', gregDay: 22, gregMonth: 'Mar' },
      { tibNum: '༥', gregDay: 23, gregMonth: 'Mar' },
      { tibNum: '༦', gregDay: 24, gregMonth: 'Mar', element: 'མཁར།', tag: 'Gyudchen Kunga Dhondup Parinirvana', isSpecial: true },
      { tibNum: '༧', gregDay: 25, gregMonth: 'Mar', element: 'བག' },
      { tibNum: '༨', gregDay: 26, gregMonth: 'Mar', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day', inauspicious: 'ཉི་ནག' },
      { tibNum: '༩', gregDay: 27, gregMonth: 'Mar' },
      { tibNum: '༡༠', gregDay: 28, gregMonth: 'Mar' },
      { tibNum: '༡༡', gregDay: 29, gregMonth: 'Mar', chad: '༡༢ཆད།', element: 'ཡན་ཀྭོང་མགྲོན།' },
      { tibNum: '༡༣', gregDay: 30, gregMonth: 'Mar', tag: 'Heruka Self-Empowerment', isSpecial: true },
      { tibNum: '༡༤', gregDay: 31, gregMonth: 'Mar' },
      { tibNum: '༡༥', gregDay: 1, gregMonth: 'Apr', sojong: true, naga: true, element: 'གསོ་སྦྱོང༌། ཀླུ་ཐེབས།' },
      { tibNum: '༡༦', gregDay: 2, gregMonth: 'Apr', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 3, gregMonth: 'Apr', element: 'བག' },
      { tibNum: '༡༧', gregDay: 4, gregMonth: 'Apr', lhag: '༡༧ལྷག', element: 'བག', note: 'Tibetan 17th duplicated (Lhag)' },
      { tibNum: '༡༨', gregDay: 5, gregMonth: 'Apr', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 6, gregMonth: 'Apr' },
      { tibNum: '༢༠', gregDay: 7, gregMonth: 'Apr' },
      { tibNum: '༢༡', gregDay: 8, gregMonth: 'Apr', element: 'མགྲོན།' },
      { tibNum: '༢༢', gregDay: 9, gregMonth: 'Apr', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 10, gregMonth: 'Apr' },
      { tibNum: '༢༤', gregDay: 11, gregMonth: 'Apr' },
      { tibNum: '༢༥', gregDay: 12, gregMonth: 'Apr' },
      { tibNum: '༢༦', gregDay: 13, gregMonth: 'Apr', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 14, gregMonth: 'Apr', element: 'བག' },
      { tibNum: '༢༨', gregDay: 15, gregMonth: 'Apr', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 16, gregMonth: 'Apr', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Lobur Lechol', isSpecial: true },
      { tibNum: '༣༠', gregDay: 17, gregMonth: 'Apr' }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༢ ཚེས་ ༦ ལ་ ༸རྒྱུད་ཆེན་ཀུན་དགའ་དོན་གྲུབ་དཔལ་བཟང་པོ་མཆོག་གི་འདས་མཆོད།',
        english: 'The Parinirvana Anniversary of Gyudchen Kunga Dhondup, the Founder of Gyuto Monastery – March 24',
        date: 'March 24'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༢ ཚེས་ ༡༣ ལ་ར་མོ་ཆེའི་བདེ་མཆོག་བདག་འཇུག་ཆེན་མོ།',
        english: 'Heruka Great Self-Empowerment of the historic Ramoche – March 30',
        date: 'March 30'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༢ ཚེས་ ༢༩ ལ་གློ་བུར་ལས་བཅོལ།',
        english: 'Lobur Lechol (The reliance for an immediate performing of benevolent deeds; ritual practice) – April 16',
        date: 'April 16'
      }
    ]
  },

  // ==========================================
  // MONTH 3 (Page 5 of PDF)
  // ==========================================
  {
    monthIndex: 3,
    tibetanMonth: 'བོད་ཟླ་གསུམ་པ།',
    tibetanMonthSub: '(ནག་ཟླ།)',
    westernRange: 'April – May 2026',
    coverCaption: 'ཕྱི་ལོ་༢༠༢༥ ཟླ་ ༡༡ ཚེས་ ༡༣ཉིན་ཆོས་ར་གསར་པའི་ནང་མན་ངག་རྒྱ་མཚོའི་གཏེར་མཛོད་༸སྐྱབས་རྗེ་མཁན་ཟུར་བྱ་དོ་རིན་པོ་ཆེ་མཆོག་གིས་དཔལ་གསང་བ་འདུས་པའི་དབང་ཆེན་བསྐུར་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Former Abbot Khenzur Jhado Rinpoche bestowing the Great Guhyasamaja Initiation in the new debate courtyard.',
    startDayOfWeek: 6, // Saturday
    days: [
      { tibNum: '༡', gregDay: 18, gregMonth: 'Apr', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 19, gregMonth: 'Apr', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 20, gregMonth: 'Apr' },
      { tibNum: '༤', gregDay: 21, gregMonth: 'Apr', chad: '༥ཆད།' },
      { tibNum: '༦', gregDay: 22, gregMonth: 'Apr', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 23, gregMonth: 'Apr', element: 'བག' },
      { tibNum: '༨', gregDay: 24, gregMonth: 'Apr', element: 'དུར།' },
      { tibNum: '༩', gregDay: 25, gregMonth: 'Apr', element: 'ཡན་ཀྭོང༌།', tag: '11th Panchen Lama Birthday', isSpecial: true },
      { tibNum: '༡༠', gregDay: 26, gregMonth: 'Apr' },
      { tibNum: '༡༡', gregDay: 27, gregMonth: 'Apr', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༡༢', gregDay: 28, gregMonth: 'Apr', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 29, gregMonth: 'Apr' },
      { tibNum: '༡༤', gregDay: 30, gregMonth: 'Apr' },
      { tibNum: '༡༥', gregDay: 1, gregMonth: 'May', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༡༦', gregDay: 2, gregMonth: 'May', element: 'མཁར་ཉི་ནག' },
      { tibNum: '༡༧', gregDay: 3, gregMonth: 'May', element: 'བག' },
      { tibNum: '༡༨', gregDay: 4, gregMonth: 'May', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 5, gregMonth: 'May' },
      { tibNum: '༢༠', gregDay: 6, gregMonth: 'May', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༢༡', gregDay: 7, gregMonth: 'May', element: 'མཁར།' },
      { tibNum: '༢༢', gregDay: 8, gregMonth: 'May', naga: true, element: 'ཀླུ་ཐེབས། ཚོང༌།' },
      { tibNum: '༢༢', gregDay: 9, gregMonth: 'May', lhag: '༢༢ལྷག', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 10, gregMonth: 'May' },
      { tibNum: '༢༤', gregDay: 11, gregMonth: 'May' },
      { tibNum: '༢༥', gregDay: 12, gregMonth: 'May', tag: 'Guhyasamaja Teaching', isSpecial: true },
      { tibNum: '༢༦', gregDay: 13, gregMonth: 'May', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 14, gregMonth: 'May', element: 'བག' },
      { tibNum: '༢༨', gregDay: 15, gregMonth: 'May', chad: '༢༩ཆད།', sojong: true, element: 'གསོ་སྦྱོང༌། དུར།' },
      { tibNum: '༣༠', gregDay: 16, gregMonth: 'May' }
    ],
    events: [
      {
        tibetan: '༡ ཕྱི་ཟླ་ ༤ ཚེས་ ༢༥ ལ་༸པཎ་ཆེན་སྐུ་ཕྲེང་བཅུ་གཅིག་པ་དགེ་འདུན་ཆོས་ཀྱི་ཉི་མ་མཆོག་གི་འཁྲུངས་སྐར།',
        english: '11th Panchen Lama\'s Birthday – April 25',
        date: 'April 25'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༣ ཚེས་ ༢༥ ལ་བླ་མ་བརྒྱུད་མཆོད་དང་། གསང་འདུས་རྒྱུད་འགྲེལ་ཆེན་མོའི་འཆད་ཉན་དབུ་འཛུགས།',
        english: 'The formal ceremony offering the highest reverence to the Abbot, and commencement of commentarial explanation on Guhyasamaja Tantra – May 12',
        date: 'May 12'
      }
    ]
  },

  // ==========================================
  // MONTH 4 (Page 6 of PDF)
  // ==========================================
  {
    monthIndex: 4,
    tibetanMonth: 'བོད་ཟླ་བཞི་པ།',
    tibetanMonthSub: '(ས་ག་ཟླ་བ།)',
    westernRange: 'May – June 2026',
    coverCaption: '༈ སློབ་དཔོན་ཟམ་གདོང་རིན་པོ་ཆེའི་འཁྲུངས་ཚེས་ཉིན་གྲྭ་ཚང་གི་དཔེ་མཛོད་ཁང་དུ་དགའ་ལྡན་ཁྲི་རིན་པོ་ཆེ་དང་ཤར་ཆོས་རིན་པོ་ཆེ་བཅས་ནས་རིན་པོ་ཆེའི་གསུང་དཔེ་དེབ་ཁག་གསུམ་དབུ་འབྱེད་གནང་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Ganden Tripa and Sharpa Chöje releasing Prof. Samdhong Rinpoche\'s three new books at the monastery library.',
    startDayOfWeek: 0, // Sunday
    days: [
      { tibNum: '༡', gregDay: 17, gregMonth: 'May', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 18, gregMonth: 'May', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 19, gregMonth: 'May' },
      { tibNum: '༤', gregDay: 20, gregMonth: 'May' },
      { tibNum: '༥', gregDay: 21, gregMonth: 'May', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༦', gregDay: 22, gregMonth: 'May', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 23, gregMonth: 'May', element: 'ཡན་ཀྭོང་ཉི་ནག', tag: 'Chumda Kangso Day 1', isSpecial: true },
      { tibNum: '༨', gregDay: 24, gregMonth: 'May', tag: 'Chumda Kangso Day 2' },
      { tibNum: '༩', gregDay: 25, gregMonth: 'May', element: 'དུར།', tag: 'Chumda Kangso Day 3' },
      { tibNum: '༡༠', gregDay: 26, gregMonth: 'May' },
      { tibNum: '༡༡', gregDay: 27, gregMonth: 'May', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 28, gregMonth: 'May', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 29, gregMonth: 'May' },
      { tibNum: '༡༤', gregDay: 30, gregMonth: 'May', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༡༥', gregDay: 31, gregMonth: 'May', tag: 'Saga Dawa Duchen (Buddha Day)', isSpecial: true },
      { tibNum: '༡༦', gregDay: 1, gregMonth: 'Jun', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 2, gregMonth: 'Jun', element: 'བག' },
      { tibNum: '༡༨', gregDay: 3, gregMonth: 'Jun', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 4, gregMonth: 'Jun' },
      { tibNum: '༢༠', gregDay: 5, gregMonth: 'Jun', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༢༡', gregDay: 6, gregMonth: 'Jun', element: 'མགྲོན།' },
      { tibNum: '༢༢', gregDay: 7, gregMonth: 'Jun', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 8, gregMonth: 'Jun' },
      { tibNum: '༢༤', gregDay: 9, gregMonth: 'Jun', inauspicious: 'ཉིན་ནག' },
      { tibNum: '༢༥', gregDay: 10, gregMonth: 'Jun', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༢༦', gregDay: 11, gregMonth: 'Jun', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 12, gregMonth: 'Jun', element: 'བག' },
      { tibNum: '༢༨', gregDay: 13, gregMonth: 'Jun', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 14, gregMonth: 'Jun', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༣༠', gregDay: 15, gregMonth: 'Jun', tag: 'Guhyasamaja Summer Semester', isSpecial: true }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༤ ཚེས་ ༧།༨།༩། བཅས་ལ་ཆུམས་མདའ་བསྐང་གསོ་ཆེན་མོ།',
        english: 'Major Ceremony involving Harmonic Chanting in relying for assistances from Mahakala and Kalarupa – May 23, 24, 25',
        date: 'May 23–25'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༤ ཚེས་ ༡༥ ལ་ས་ག་ཟླ་བའི་དུས་ཆེན།',
        english: 'Buddha Shakyamuni\'s birth, Enlightenment & Parinirvana (Saga Dawa Duchen) – May 31',
        date: 'May 31'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༤ ཚེས་ ༣༠ ལ་དགའ་ལྡན་དབྱར་ཆོས་ཀྱི་གསང་འདུས་བདག་འཇུག་ཆེན་མོ།',
        english: 'The Great Self-Empowerment of Guhyasamaja, of the Gadhen Summer Semester – June 15',
        date: 'June 15'
      }
    ]
  },

  // ==========================================
  // MONTH 5 (Page 7 of PDF)
  // ==========================================
  {
    monthIndex: 5,
    tibetanMonth: 'བོད་ཟླ་ལྔ་པ།',
    tibetanMonthSub: '(སྣྲོན་ཟླ་བ།)',
    westernRange: 'June – July 2026',
    coverCaption: '༄༅།། ཕྱི་ལོ་༢༠༢༥ཟླ་ ༧ ཚེས་ ༦ ཉིན་མཁན་བླ་འདུས་མང་ནས་རྒྱལ་བའི་བཀའ་དྲིན་རྗེས་དྲན་གྱི་བྱམས་རྩེའི་ལོ་སྲུང་བརྩི་དང་འབྲེལ་༸གོང་ས་མཆོག་གི་སྐུའི་འཁྲུངས་སྐར་ཉིན་བསང་གསོལ་གཏོང་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Abbot and monastic assembly offering Sangsol incense ritual on the 90th Birthday celebration of H.H. the 14th Dalai Lama.',
    startDayOfWeek: 2, // Tuesday
    days: [
      { tibNum: '༡', gregDay: 16, gregMonth: 'Jun', element: 'མགྲོན།' },
      { tibNum: '༣', gregDay: 17, gregMonth: 'Jun', chad: '༢ཆད།' },
      { tibNum: '༤', gregDay: 18, gregMonth: 'Jun' },
      { tibNum: '༥', gregDay: 19, gregMonth: 'Jun', element: 'ཡན་ཀྭོང༌།' },
      { tibNum: '༦', gregDay: 20, gregMonth: 'Jun', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 21, gregMonth: 'Jun', tag: 'དབྱར་ཉི་ལྡོག Summer Solstice', isSpecial: true },
      { tibNum: '༨', gregDay: 22, gregMonth: 'Jun', inauspicious: 'ཞག་ངན།', element: 'བག' },
      { tibNum: '༩', gregDay: 23, gregMonth: 'Jun', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day', inauspicious: 'ཉི་ནག' },
      { tibNum: '༡༠', gregDay: 24, gregMonth: 'Jun' },
      { tibNum: '༡༡', gregDay: 25, gregMonth: 'Jun', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 26, gregMonth: 'Jun', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 27, gregMonth: 'Jun' },
      { tibNum: '༡༤', gregDay: 28, gregMonth: 'Jun' },
      { tibNum: '༡༥', gregDay: 29, gregMonth: 'Jun', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Universal Prayer Day (Zamling Chisang)', isSpecial: true },
      { tibNum: '༡༦', gregDay: 30, gregMonth: 'Jun', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 1, gregMonth: 'Jul', element: 'བག' },
      { tibNum: '༡༧', gregDay: 2, gregMonth: 'Jul', lhag: '༡༧ལྷག' },
      { tibNum: '༡༨', gregDay: 3, gregMonth: 'Jul', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 4, gregMonth: 'Jul' },
      { tibNum: '༢༠', gregDay: 5, gregMonth: 'Jul' },
      { tibNum: '༢༡', gregDay: 6, gregMonth: 'Jul', element: 'མགྲོན།', tag: 'H.H. The Dalai Lama Birthday', isSpecial: true },
      { tibNum: '༢༢', gregDay: 7, gregMonth: 'Jul', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 8, gregMonth: 'Jul' },
      { tibNum: '༢༤', gregDay: 9, gregMonth: 'Jul', chad: '༢༥ཆད།' },
      { tibNum: '༢༦', gregDay: 10, gregMonth: 'Jul', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 11, gregMonth: 'Jul', element: 'བག', tag: 'Ramoche Kangso Day 1', isSpecial: true },
      { tibNum: '༢༨', gregDay: 12, gregMonth: 'Jul', element: 'དུར།', tag: 'Ramoche Kangso Day 2' },
      { tibNum: '༢༩', gregDay: 13, gregMonth: 'Jul', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Ramoche Kangso Day 3' },
      { tibNum: '༣༠', gregDay: 14, gregMonth: 'Jul' }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༥ ཚེས་ ༧ ལ་དབྱར་ཉི་ལྡོག',
        english: 'Summer Solstice – June 21',
        date: 'June 21'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༥ ཚེས་ ༡༥ ལ་འཛམ་གླིང་སྤྱི་བསང༌།',
        english: 'Universal Prayer Day (World Incense Day / Zamling Chisang) – June 29',
        date: 'June 29'
      },
      {
        tibetan: '༣ ཕྱི་ཟླ་ ༧ ཚེས་ ༦ ལ་༸སྤྱི་ནོར་༸གོང་ས་ཆེན་པོ་མཆོག་གི་སྐུའི་འཁྲུངས་སྐར།',
        english: 'Birthday of H.H. The 14th Dalai Lama – July 6',
        date: 'July 6'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༥ ཚེས་ ༢༧།༢༨།༢༩། བཅས་ལ་ར་མོ་ཆེའི་བསྐང་གསོ་ཆེན་མོ།',
        english: 'The Great Kangso of Ramoche (Ceremony of Mahakala and Kalarupa) – July 11, 12, 13',
        date: 'July 11–13'
      }
    ]
  },

  // ==========================================
  // MONTH 6 (Page 8 of PDF)
  // ==========================================
  {
    monthIndex: 6,
    tibetanMonth: 'བོད་ཟླ་དྲུག་པ།',
    tibetanMonthSub: '(ཆུ་སྟོད་ཟླ་བ།)',
    westernRange: 'July – August 2026',
    coverCaption: 'བོད་མིའི་སྒྲིག་འཛུགས་ཀྱི་དཔལ་ལྡན་སྲིད་སྐྱོང་སྤེན་པ་ཚེ་རིང་མཆོག་གྲྭ་ཚང་དུ་འཚམས་གཟིགས་སྐབས་༸སྐྱབས་རྗེ་མཁན་རིན་པོ་ཆེ་དགེ་བསྐོས་བྱང་འདྲེན་ཆེན་མོ་བཅས་ལ་གསོལ་ཇ་འདེགས་འབུལ་ཞུས་པའི་རྣམ་པ།',
    coverCaptionEn: 'Sikyong Penpa Tsering of the Central Tibetan Administration visiting Gyuto Monastery.',
    startDayOfWeek: 3, // Wednesday
    days: [
      { tibNum: '༡', gregDay: 15, gregMonth: 'Jul', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 16, gregMonth: 'Jul', element: 'ཡན་ཀྭོང༌།' },
      { tibNum: '༣', gregDay: 17, gregMonth: 'Jul', tag: 'Mandala Consecration', isSpecial: true },
      { tibNum: '༤', gregDay: 18, gregMonth: 'Jul', tag: 'Chokhor Duchen (First Teaching)', isSpecial: true },
      { tibNum: '༥', gregDay: 19, gregMonth: 'Jul' },
      { tibNum: '༦', gregDay: 20, gregMonth: 'Jul', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 21, gregMonth: 'Jul', element: 'བག' },
      { tibNum: '༨', gregDay: 22, gregMonth: 'Jul', element: 'དུར།' },
      { tibNum: '༩', gregDay: 23, gregMonth: 'Jul' },
      { tibNum: '༡༠', gregDay: 24, gregMonth: 'Jul' },
      { tibNum: '༡༡', gregDay: 25, gregMonth: 'Jul', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 26, gregMonth: 'Jul', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 27, gregMonth: 'Jul' },
      { tibNum: '༡༤', gregDay: 28, gregMonth: 'Jul', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Guhyasamaja Self-Empowerment', isSpecial: true },
      { tibNum: '༡༥', gregDay: 29, gregMonth: 'Jul', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༡༦', gregDay: 30, gregMonth: 'Jul', element: 'མཁར།', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༡༧', gregDay: 31, gregMonth: 'Jul', element: 'བག' },
      { tibNum: '༡༨', gregDay: 1, gregMonth: 'Aug', inauspicious: 'ཉི་ནག' },
      { tibNum: '༡༩', gregDay: 2, gregMonth: 'Aug' },
      { tibNum: '༢༠', gregDay: 3, gregMonth: 'Aug' },
      { tibNum: '༢༡', gregDay: 4, gregMonth: 'Aug', element: 'མགྲོན།' },
      { tibNum: '༢༢', gregDay: 5, gregMonth: 'Aug', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 6, gregMonth: 'Aug' },
      { tibNum: '༢༤', gregDay: 7, gregMonth: 'Aug' },
      { tibNum: '༢༥', gregDay: 8, gregMonth: 'Aug' },
      { tibNum: '༢༦', gregDay: 9, gregMonth: 'Aug', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 10, gregMonth: 'Aug', chad: '༢༨ཆད།', element: 'བག' },
      { tibNum: '༢༩', gregDay: 11, gregMonth: 'Aug' },
      { tibNum: '༣༠', gregDay: 12, gregMonth: 'Aug', sojong: true, element: 'གསོ་སྦྱོང༌།' }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༦ ཚེས་ ༣ ལ་རས་བྲིས་དང་འབྲེལ་བའི་རབ་གནས།',
        english: 'The Consecration Ceremony, based on a mandala painted on cloth – July 17',
        date: 'July 17'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༦ ཚེས་ ༤ ལ་ཆོས་འཁོར་དུས་ཆེན།',
        english: 'Anniversary of Buddha\'s First Teaching (Chokhor Duchen) – July 18',
        date: 'July 18'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༦ ཚེས་ ༡༤ ལ་ར་མོ་ཆེའི་གསང་འདུས་བདག་འཇུག་ཆེན་མོ།',
        english: 'The Great Self-Empowerment of Guhyasamaja, of the historic Ramoche – July 28',
        date: 'July 28'
      }
    ]
  },

  // ==========================================
  // MONTH 7 (Page 9 of PDF)
  // ==========================================
  {
    monthIndex: 7,
    tibetanMonth: 'བོད་ཟླ་བདུན་པ།',
    tibetanMonthSub: '(གྲོ་བཞིན་ཟླ་བ།)',
    westernRange: 'August – September 2026',
    coverCaption: '༄༅།།བོད་རྒྱལ་ལོ་ ༢༡༥༢ བོད་ཟླ་ ༡༠ ཚེས་ ༡༢ རེས་གཟའ་མིག་དམར་ཉིན་༸སྐྱབས་རྗེ་མཁན་བླ་གཉིས་དབུ་བཞུགས་ཐོག་སློབ་གཉེར་བ་རྣམས་ཀྱིས་ཟླ་དྲུག་དམ་བཅའ་ཆེན་མོ་ཚོགས་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Six-month Great Debating Examination presided by Abbot and senior monastic dignitaries.',
    startDayOfWeek: 4, // Thursday
    days: [
      { tibNum: '༡', gregDay: 13, gregMonth: 'Aug', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༢', gregDay: 14, gregMonth: 'Aug', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 15, gregMonth: 'Aug', tag: 'Indian Independence Day', isSpecial: true },
      { tibNum: '༤', gregDay: 16, gregMonth: 'Aug' },
      { tibNum: '༥', gregDay: 17, gregMonth: 'Aug' },
      { tibNum: '༦', gregDay: 18, gregMonth: 'Aug', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 19, gregMonth: 'Aug', element: 'བག', tag: 'Tantric Exam Day 1', isSpecial: true },
      { tibNum: '༨', gregDay: 20, gregMonth: 'Aug', element: 'དུར།', tag: 'Tantric Exam Day 2' },
      { tibNum: '༩', gregDay: 21, gregMonth: 'Aug', tag: 'Tantric Exam Day 3' },
      { tibNum: '༡༠', gregDay: 22, gregMonth: 'Aug', tag: 'Tantric Exam Day 4' },
      { tibNum: '༡༡', gregDay: 23, gregMonth: 'Aug', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 24, gregMonth: 'Aug', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 25, gregMonth: 'Aug' },
      { tibNum: '༡༤', gregDay: 26, gregMonth: 'Aug' },
      { tibNum: '༡༤', gregDay: 27, gregMonth: 'Aug', lhag: '༡༤ལྷག' },
      { tibNum: '༡༥', gregDay: 28, gregMonth: 'Aug', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Varsika (Summer Retreat)', isSpecial: true },
      { tibNum: '༡༦', gregDay: 29, gregMonth: 'Aug', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 30, gregMonth: 'Aug', tag: 'Chakrasamvara Commentary', isSpecial: true },
      { tibNum: '༡༨', gregDay: 31, gregMonth: 'Aug', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 1, gregMonth: 'Sep', chad: '༢༠ཆད།', element: 'ཡན་ཀྭོང༌།', inauspicious: 'ཉི་ནག' },
      { tibNum: '༢༡', gregDay: 2, gregMonth: 'Sep', element: 'མགྲོན།', tag: 'Tibet Democracy Day', isSpecial: true },
      { tibNum: '༢༢', gregDay: 3, gregMonth: 'Sep', naga: true, element: 'ཀླུ་ཐེབས། ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 4, gregMonth: 'Sep' },
      { tibNum: '༢༤', gregDay: 5, gregMonth: 'Sep' },
      { tibNum: '༢༥', gregDay: 6, gregMonth: 'Sep' },
      { tibNum: '༢༦', gregDay: 7, gregMonth: 'Sep', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 8, gregMonth: 'Sep', inauspicious: 'ཉི་ནག', element: 'བག', tag: 'Drak-yerpa Kangso Day 1', isSpecial: true },
      { tibNum: '༢༨', gregDay: 9, gregMonth: 'Sep', element: 'དུར།', tag: 'Drak-yerpa Kangso Day 2' },
      { tibNum: '༢༩', gregDay: 10, gregMonth: 'Sep', sojong: true, element: 'གསོ་སྦྱོང༌། ཡན་ཀྭོང༌།', tag: 'Drak-yerpa Kangso Day 3' },
      { tibNum: '༣༠', gregDay: 11, gregMonth: 'Sep', inauspicious: 'ཞག་ངན།' }
    ],
    events: [
      {
        tibetan: '༡ ཕྱི་ཟླ་ ༨ ཚེས་ ༡༥ ལ་རྒྱ་གར་རང་བཙན་ཉིན་མོ།',
        english: 'Independence Day of India – August 15',
        date: 'August 15'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༧ ཚེས་ ༧།༨།༩།༡༠། བཅས་ལ་ལོ་འཁོར་སྔགས་ཆོག་རྒྱུགས་སྤྲོད་ཆེན་མོ།',
        english: 'Annual Monastic Examination of Tantric Rituals – August 19, 20, 21, 22',
        date: 'Aug 19–22'
      },
      {
        tibetan: '༣ ཕྱི་ཟླ་ ༩ ཚེས་ ༢ ཉིན་བོད་ལྗོངས་དམངས་གཙོ་དུས་ཆེན།',
        english: 'Democracy Day of Tibet – September 2',
        date: 'September 2'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༧ ཚེས་ ༡༥ ཉིན་དབྱར་ཕྱི་མ་ཞལ་བཞེས།',
        english: 'Varsika or the Commencement of the Summer Retreat – August 28',
        date: 'August 28'
      },
      {
        tibetan: '༥ བོད་ཟླ་ ༧ ཚེས་ ༡༧ ལ་བདེ་མཆོག་རྒྱུད་འགྲེལ་ཆེན་མོའི་འཆད་ཉན་དབུ་འཛུགས།',
        english: 'Commencement of commentarial explanation on the Great Commentary of Chakrasamvara Tantra – August 30',
        date: 'August 30'
      },
      {
        tibetan: '༦ བོད་ཟླ་ ༧ ཚེས་ ༢༧།༢༨།༢༩། བཅས་ལ་བྲག་ཡེར་པའི་བསྐང་གསོ་ཆེན་མོ།',
        english: 'The Great Kangso of Drak-yerpa (Mahakala and Kalarupa ceremony) – September 8, 9, 10',
        date: 'Sept 8–10'
      }
    ]
  },

  // ==========================================
  // MONTH 8 (Page 10 of PDF)
  // ==========================================
  {
    monthIndex: 8,
    tibetanMonth: 'བོད་ཟླ་བརྒྱད་པ།',
    tibetanMonthSub: '(ཁྲུམས་ཟླ།)',
    westernRange: 'September – October 2026',
    coverCaption: '༈ ལྷ་རམས་དགེ་བཤེས་ཀྱི་སྔགས་ཀྱི་ཕྱག་འཁྱེར་འབུལ་ཉིན་༸དགའ་ལྡན་ཁྲི་རིན་པོ་ཆེ་དང་། ཤར་ཆོས་རིན་པོ་ཆེ། གདན་ས་དྲུག་དང་རྒྱུད་གྲྭ་གཉིས་ཀྱི་མཁན་པོ་མཁན་ཚབ་བཅས་ལྷན་སྒྲོན་སྐུ་པར།',
    coverCaptionEn: 'Award ceremony of Tantric Master Certificates (Lharampa Geshes) attended by Ganden Tripa, Sharpa Chöje, and Abbots.',
    startDayOfWeek: 6, // Saturday
    days: [
      { tibNum: '༡', gregDay: 12, gregMonth: 'Sep', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 13, gregMonth: 'Sep', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 14, gregMonth: 'Sep' },
      { tibNum: '༤', gregDay: 15, gregMonth: 'Sep' },
      { tibNum: '༥', gregDay: 16, gregMonth: 'Sep' },
      { tibNum: '༦', gregDay: 17, gregMonth: 'Sep', element: 'མཁར།', tag: 'Yerpa Dhunkye', isSpecial: true },
      { tibNum: '༧', gregDay: 18, gregMonth: 'Sep', element: 'བག' },
      { tibNum: '༨', gregDay: 19, gregMonth: 'Sep', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day', tag: 'Mandala Construction Training' },
      { tibNum: '༩', gregDay: 20, gregMonth: 'Sep', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༡༠', gregDay: 21, gregMonth: 'Sep', inauspicious: 'ཉི་ནག' },
      { tibNum: '༡༡', gregDay: 22, gregMonth: 'Sep', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 23, gregMonth: 'Sep', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 24, gregMonth: 'Sep', tag: 'སྟོན་ཉིན་མཚན་མཉམ། Autumnal Equinox' },
      { tibNum: '༡༤', gregDay: 25, gregMonth: 'Sep', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༡༥', gregDay: 26, gregMonth: 'Sep' },
      { tibNum: '༡༦', gregDay: 27, gregMonth: 'Sep', element: 'མཁར།', tag: 'Deep Chanting of Mahakala', isSpecial: true },
      { tibNum: '༡༧', gregDay: 28, gregMonth: 'Sep', element: 'བག' },
      { tibNum: '༡༨', gregDay: 29, gregMonth: 'Sep', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day', element2: 'དུར།' },
      { tibNum: '༡༩', gregDay: 30, gregMonth: 'Sep' },
      { tibNum: '༢༠', gregDay: 1, gregMonth: 'Oct' },
      { tibNum: '༢༡', gregDay: 2, gregMonth: 'Oct', element: 'མགྲོན།', tag: 'Gandhi Jayanti', isSpecial: true },
      { tibNum: '༢༢', gregDay: 3, gregMonth: 'Oct', element: 'ཚོང༌།', tag: 'Mandala Exam Day 1', isSpecial: true },
      { tibNum: '༢༣', gregDay: 4, gregMonth: 'Oct', chad: '༢༤ཆད།', tag: 'Mandala Exam Day 2' },
      { tibNum: '༢༥', gregDay: 5, gregMonth: 'Oct', tag: 'Tantric Dialectical Sessions', isSpecial: true },
      { tibNum: '༢༦', gregDay: 6, gregMonth: 'Oct', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 7, gregMonth: 'Oct', element: 'ཡན་ཀྭོང༌།', tag: 'Major Kangso of Mahakala', isSpecial: true },
      { tibNum: '༢༨', gregDay: 8, gregMonth: 'Oct', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 9, gregMonth: 'Oct' },
      { tibNum: '༣༠', gregDay: 10, gregMonth: 'Oct', sojong: true, element: 'གསོ་སྦྱོང༌།' }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༨ ཚེས་ ༦ ལ་ཡེར་པ་མདུན་བསྐྱེད།',
        english: 'Yerpa Dhunkye (Chakrasamvara practice, through self-generated Deity, of historic Drak-yerpa) – September 17',
        date: 'Sept 17'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༨ ཚེས་ ༨ ནས་ ༡༤ བར་གསང་བདེ་འཇིགས་གསུམ་གྱི་ཐིག་སྦྱོང༌།',
        english: 'Training on mandala-construction details of Guhyasamaja, Heruka and Vajrabhairava – September 19–25',
        date: 'Sept 19–25'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༨ ཚེས་ ༡༦ ནས་ ༡༨ བར་དབྱངས་སྒར་ཆེན་མོ།',
        english: 'Sacred deep Chanting of the Whole of Mahakala and Kalarupa\'s Prayers – September 27, 28, 29',
        date: 'Sept 27–29'
      },
      {
        tibetan: '༤ ཕྱི་ཟླ་ ༡༠ ཚེས་ ༢ ལ་གྷན་དྷིའི་འཁྲུངས་སྐར།',
        english: 'Gandhi Jayanti – October 2',
        date: 'October 2'
      },
      {
        tibetan: '༥ བོད་ཟླ་ ༨ ཚེས་ ༢༢།༢༣།༢༤། བཅས་ལ་གསང་བདེ་འཇིགས་གསུམ་གྱི་ཐིག་ཆེན་རྒྱུགས་སྤྲོད།',
        english: 'Examinations on mandala constructions of Guhyasamaja, Heruka and Vajrabhairava – October 3–4',
        date: 'Oct 3–4'
      },
      {
        tibetan: '༦ བོད་ཟླ་ ༨ ཚེས་ ༢༥ ལ་བླ་མ་བརྒྱུད་མཆོད་དང༌། བྲག་ཡེར་པའི་སྔགས་དམ་འཇོག',
        english: 'The formal ceremony offering highest reverence to the Abbot, and Tantric Dialectical Sessions as done at Drak-yerpa – October 5',
        date: 'October 5'
      },
      {
        tibetan: '༧ བོད་ཟླ་ ༨ ཚེས་ ༢༧ ལ་བསྐང་གསོ་ཆེན་མོ།',
        english: 'The major Fulfill-Revive supplication ceremony of Mahakala and Kalarupa – October 7',
        date: 'October 7'
      }
    ]
  },

  // ==========================================
  // MONTH 9 (Page 11 of PDF)
  // ==========================================
  {
    monthIndex: 9,
    tibetanMonth: 'བོད་ཟླ་དགུ་པ།',
    tibetanMonthSub: '(དབྱུག་གི་ཟླ་བ།)',
    westernRange: 'October – November 2026',
    coverCaption: '༈ འདི་ལོར་༸དགའ་ལྡན་ཁྲི་རིན་པོ་ཆེ་དང་ཤར་པ་ཆོས་རྗེ་རིན་པོ་ཆེ་གཉིས་དབུ་བཞུགས་ཐོག་དགེ་བཤེས་ལྷ་རམས་པའི་སྔགས་ཀྱི་ཕྱག་འཁྱེར་འབུལ་བའི་མཛད་སྒོ་ལེགས་གྲུབ་མཚམས་སུ་ལྷན་དུ་སྒྲོན་པའི་སྐུ་པར།',
    coverCaptionEn: 'Group photo of graduates and teachers upon completion of Tantric Master certificate conferring ceremony.',
    startDayOfWeek: 0, // Sunday
    days: [
      { tibNum: '༡', gregDay: 11, gregMonth: 'Oct', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 12, gregMonth: 'Oct', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 13, gregMonth: 'Oct' },
      { tibNum: '༤', gregDay: 14, gregMonth: 'Oct' },
      { tibNum: '༥', gregDay: 15, gregMonth: 'Oct' },
      { tibNum: '༦', gregDay: 16, gregMonth: 'Oct', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 17, gregMonth: 'Oct', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day', element2: 'བག', tag: 'Geshe Tantric Debate', isSpecial: true },
      { tibNum: '༨', gregDay: 18, gregMonth: 'Oct', element: 'དུར།' },
      { tibNum: '༩', gregDay: 19, gregMonth: 'Oct' },
      { tibNum: '༩', gregDay: 20, gregMonth: 'Oct', lhag: '༩ལྷག' },
      { tibNum: '༡༠', gregDay: 21, gregMonth: 'Oct' },
      { tibNum: '༡༡', gregDay: 22, gregMonth: 'Oct', element: 'མགྲོན།', tag: 'Yamantaka Sand Mandala Consecration', isSpecial: true },
      { tibNum: '༡༢', gregDay: 23, gregMonth: 'Oct', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 24, gregMonth: 'Oct' },
      { tibNum: '༡༤', gregDay: 25, gregMonth: 'Oct', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༡༥', gregDay: 26, gregMonth: 'Oct', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༡༦', gregDay: 27, gregMonth: 'Oct', chad: '༡༧ཆད།', element: 'མཁར།' },
      { tibNum: '༡༨', gregDay: 28, gregMonth: 'Oct', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 29, gregMonth: 'Oct' },
      { tibNum: '༢༠', gregDay: 30, gregMonth: 'Oct', inauspicious: 'ཉི་ནག' },
      { tibNum: '༢༡', gregDay: 31, gregMonth: 'Oct', element: 'མགྲོན།' },
      { tibNum: '༢༢', gregDay: 1, gregMonth: 'Nov', element: 'ཚོང༌།', tag: 'Lhabab Duchen (Descent from Heaven)', isSpecial: true },
      { tibNum: '༢༣', gregDay: 2, gregMonth: 'Nov', tag: 'Annual Monastic Examinations', isSpecial: true },
      { tibNum: '༢༤', gregDay: 3, gregMonth: 'Nov', element: 'ཡན་ཀྭོང༌།' },
      { tibNum: '༢༥', gregDay: 4, gregMonth: 'Nov' },
      { tibNum: '༢༦', gregDay: 5, gregMonth: 'Nov', element: 'མཁར།' },
      { tibNum: '༢༧', gregDay: 6, gregMonth: 'Nov', element: 'བག' },
      { tibNum: '༢༨', gregDay: 7, gregMonth: 'Nov', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 8, gregMonth: 'Nov', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༣༠', gregDay: 9, gregMonth: 'Nov' }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༩ ཚེས་ ༧ ལ་དགེ་བཤེས་སྔགས་དམ་འཇོག',
        english: 'Dialectical debate of Geshes, based on Jeytsun Kunga Dhondup\'s commentary on Guhyasamaja – October 17',
        date: 'October 17'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༩ ཚེས་ ༡༡ ལ་རྡུལ་ཚོན་དང་འབྲེལ་བའི་འཇིགས་བྱེད་རབ་གནས་ཆེན་མོ།',
        english: 'The Great Consecration Ceremony through Vajrabhairava (Yamantaka), related with coloured-sand mandala – October 22',
        date: 'October 22'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༩ ཚེས་ ༢༢ ལ་ལྷ་བབས་དུས་ཆེན།',
        english: 'Anniversary of Buddha\'s Descent from Tushita Heaven (Lhabab Duchen) – November 1',
        date: 'November 1'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༩ ཚེས་ ༢༣ ལ་ལོ་འཁོར་མཚན་ཉིད་རྒྱུགས་སྤྲོད་ཆེན་མོ།',
        english: 'Annual monastic examinations on the five major texts of the dialectical syllabus – November 2',
        date: 'November 2'
      }
    ]
  },

  // ==========================================
  // MONTH 10 (Page 12 of PDF)
  // ==========================================
  {
    monthIndex: 10,
    tibetanMonth: 'བོད་ཟླ་བཅུ་པ།',
    tibetanMonthSub: '(སྨིན་དྲུག་ཟླ་བ།)',
    westernRange: 'November – December 2026',
    coverCaption: '༄༅།། ཕྱི་ལོ་༢༠༢༥ ཟླ་༡༡ ཚེས་ ༢༣ ཉིན་ར་ཆེ་གཙུག་ལག་ཁང་དུ༸སྐྱབས་རྗེ་བླ་དབུ་རིན་པོ་ཆེ་དབུ་བཞུགས་ཀྱིས་དཔེ་ཁྲིད་རྒན་རྣམ་པའི་གཙོ་སྐྱོང་འོག་མདོ་སྔགས་བགྲོ་གླེང་ཆེན་མོ་འཚོག་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Grand symposium on Sutra and Tantra presided by the Abbot and senior teaching masters.',
    startDayOfWeek: 2, // Tuesday
    days: [
      { tibNum: '༡', gregDay: 10, gregMonth: 'Nov', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 11, gregMonth: 'Nov', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 12, gregMonth: 'Nov' },
      { tibNum: '༤', gregDay: 13, gregMonth: 'Nov' },
      { tibNum: '༥', gregDay: 14, gregMonth: 'Nov' },
      { tibNum: '༦', gregDay: 15, gregMonth: 'Nov', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 16, gregMonth: 'Nov', element: 'བག' },
      { tibNum: '༨', gregDay: 17, gregMonth: 'Nov', element: 'དུར།', tag: 'Discussions on Mantra', isSpecial: true },
      { tibNum: '༩', gregDay: 18, gregMonth: 'Nov' },
      { tibNum: '༡༠', gregDay: 19, gregMonth: 'Nov' },
      { tibNum: '༡༡', gregDay: 20, gregMonth: 'Nov', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 21, gregMonth: 'Nov', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 22, gregMonth: 'Nov' },
      { tibNum: '༡༤', gregDay: 23, gregMonth: 'Nov', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༡༥', gregDay: 24, gregMonth: 'Nov' },
      { tibNum: '༡༦', gregDay: 25, gregMonth: 'Nov', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 26, gregMonth: 'Nov', element: 'བག', tag: 'Great Torma Offering (Mahakala)', isSpecial: true },
      { tibNum: '༡༨', gregDay: 27, gregMonth: 'Nov', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 28, gregMonth: 'Nov' },
      { tibNum: '༢༠', gregDay: 29, gregMonth: 'Nov', chad: '༢༡ཆད།' },
      { tibNum: '༢༢', gregDay: 30, gregMonth: 'Nov', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 1, gregMonth: 'Dec', element: 'ཡན་ཀྭོང༌།' },
      { tibNum: '༢༤', gregDay: 2, gregMonth: 'Dec' },
      { tibNum: '༢༥', gregDay: 3, gregMonth: 'Dec', inauspicious: 'ཞག་ངན།', tag: 'Ganden Ngamchoe (Je Tsongkhapa)', isSpecial: true },
      { tibNum: '༢༦', gregDay: 4, gregMonth: 'Dec', element: 'མཁར།', tag: 'Ngagrampa Geshe Examination', isSpecial: true },
      { tibNum: '༢༧', gregDay: 5, gregMonth: 'Dec', element: 'བག' },
      { tibNum: '༢༨', gregDay: 6, gregMonth: 'Dec', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 7, gregMonth: 'Dec' },
      { tibNum: '༣༠', gregDay: 8, gregMonth: 'Dec', sojong: true, element: 'གསོ་སྦྱོང༌།', inauspicious: 'ཉི་ནག', tag: '13th Dalai Lama Parinirvana', isSpecial: true }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༡༠ ཚེས་ ༨ ལ་སྟོན་ཆོས་གཉིས་པའི་སྔགས་དམ་འཇོག',
        english: 'Dialectical discussions and debates on Mantra, of latter Summer Semester – November 17',
        date: 'November 17'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༡༠ ཚེས་ ༡༧ ལ་རྩེ་ཆོས་ཐོག་གི་མགོན་པོའི་གཏོར་ཆེན།',
        english: 'The Great Torma Offering and Casting ceremony, through Mahakala, at The Summit (Potala) – November 26',
        date: 'November 26'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༡༠ ཚེས་ ༢༥ ལ་དགའ་ལྡན་ལྔ་མཆོད་ཆེན་མོ་དང་། རྩེ་རྒྱང་མཇལ།',
        english: 'Parinirvana anniversary of Je Tsongkhapa (Ganden Ngamchoe) & audience at Potala – December 3',
        date: 'December 3'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༡༠ ཚེས་ ༢༦ ལ་སྔགས་རམས་རྒྱུགས་སྤྲོད་ཆེན་མོ།',
        english: 'The major examinations of Ngag-rampa Geshes (the Tantric Graduates) – December 4',
        date: 'December 4'
      },
      {
        tibetan: '༥ བོད་ཟླ་ ༡༠ ཚེས་ ༣༠ ༸རྒྱལ་དབང་སྐུ་ཕྲེང་བཅུ་གསུམ་པའི་འདས་མཆོད།',
        english: 'Parinirvana anniversary of H.H. the 13th Dalai Lama – December 8',
        date: 'December 8'
      }
    ]
  },

  // ==========================================
  // MONTH 11 (Page 13 of PDF)
  // ==========================================
  {
    monthIndex: 11,
    tibetanMonth: 'བོད་ཟླ་བཅུ་གཅིག་པ།',
    tibetanMonthSub: '(མགོ་ཟླ་བ།)',
    westernRange: 'December 2026 – January 2027',
    coverCaption: '༄༅།།ཕྱི་ལོ་༢༠༢༥ ཟླ་ ༡༡ ཚེས་ ༦ ཉིན་གསང་ཆེན་རིག་པ་འཛིན་པའི་སྡེ་ཆེན་པོ་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་ལོ་འཁོར་རྒྱུགས་སྤྲོད་ཆེན་མོའི་ནང་གསེས། མདོ་སྔགས་གཉིས་ཀྱི་བྲིས་རྒྱུགས་འབུལ་བཞིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Monks taking the annual written examination on both Sutra and Tantra.',
    startDayOfWeek: 3, // Wednesday
    days: [
      { tibNum: '༡', gregDay: 9, gregMonth: 'Dec', element: 'མགྲོན།' },
      { tibNum: '༢', gregDay: 10, gregMonth: 'Dec', element: 'ཚོང༌།', tag: 'Nobel Peace Prize Anniversary (H.H. Dalai Lama)', isSpecial: true },
      { tibNum: '༣', gregDay: 11, gregMonth: 'Dec' },
      { tibNum: '༣', gregDay: 12, gregMonth: 'Dec', lhag: '༣ལྷག' },
      { tibNum: '༤', gregDay: 13, gregMonth: 'Dec' },
      { tibNum: '༥', gregDay: 14, gregMonth: 'Dec' },
      { tibNum: '༦', gregDay: 15, gregMonth: 'Dec', element: 'མཁར།', tag: 'Nine Bad Omens Day', isSpecial: true },
      { tibNum: '༧', gregDay: 16, gregMonth: 'Dec', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༨', gregDay: 17, gregMonth: 'Dec', element: 'དུར།' },
      { tibNum: '༩', gregDay: 18, gregMonth: 'Dec' },
      { tibNum: '༡༠', gregDay: 19, gregMonth: 'Dec', inauspicious: 'ཉི་ནག' },
      { tibNum: '༡༡', gregDay: 20, gregMonth: 'Dec', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 21, gregMonth: 'Dec', element: 'ཚོང༌།' },
      { tibNum: '༡༣', gregDay: 22, gregMonth: 'Dec', tag: 'དགུན་ཉི་ལྡོག Winter Solstice', isSpecial: true },
      { tibNum: '༡༤', gregDay: 23, gregMonth: 'Dec', chad: '༡༥ཆད།', sojong: true, naga: true, element: 'གསོ་སྦྱོང༌། ཀླུ་ཐེབས།', tag: 'Panchen Sonam Drakpa Parinirvana', isSpecial: true },
      { tibNum: '༡༦', gregDay: 24, gregMonth: 'Dec', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 25, gregMonth: 'Dec', element: 'བག' },
      { tibNum: '༡༨', gregDay: 26, gregMonth: 'Dec', element: 'དུར།' },
      { tibNum: '༡༩', gregDay: 27, gregMonth: 'Dec' },
      { tibNum: '༢༠', gregDay: 28, gregMonth: 'Dec' },
      { tibNum: '༢༡', gregDay: 29, gregMonth: 'Dec', element: 'ཡན་ཀྭོང༌། མགྲོན།' },
      { tibNum: '༢༢', gregDay: 30, gregMonth: 'Dec', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 31, gregMonth: 'Dec' },
      { tibNum: '༢༤', gregDay: 1, gregMonth: 'Jan', tag: 'Western New Year 2027', isSpecial: true },
      { tibNum: '༢༥', gregDay: 2, gregMonth: 'Jan' },
      { tibNum: '༢༦', gregDay: 3, gregMonth: 'Jan', element: 'མཁར།', tag: 'Yangpachen Kangso Day 1', isSpecial: true },
      { tibNum: '༢༧', gregDay: 4, gregMonth: 'Jan', element: 'བག', tag: 'Yangpachen Kangso Day 2' },
      { tibNum: '༢༨', gregDay: 5, gregMonth: 'Jan', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 6, gregMonth: 'Jan', sojong: true, element: 'གསོ་སྦྱོང༌།' },
      { tibNum: '༣༠', gregDay: 7, gregMonth: 'Jan' }
    ],
    events: [
      {
        tibetan: '༡ ཕྱི་ཟླ་ ༡༢ ཚེས་ ༡༠ ལ་༸གོང་ས་མཆོག་ལ་ནོ་སྦེལ་ཞི་བདེ་གཟེངས་རྟགས་ཕུལ་བའི་དུས་དྲན།',
        english: 'Commemoration of awarding of the Nobel Peace Prize to H.H. the 14th Dalai Lama – December 10',
        date: 'December 10'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༡༡ ཚེས་ ༦ ལ་ ངན་པ་དགུ་འཛོམས།',
        english: 'The day of Nine Bad Omens – December 15',
        date: 'December 15'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༡༡ ཚེས་ ༡༣ ལ་ དགུན་ཉི་ལྡོག',
        english: 'Winter Solstice – December 22',
        date: 'December 22'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༡༡ ཚེས་ ༡༤ ལ་ པཎ་ཆེན་བསོད་ནམས་གྲགས་པའི་དགོངས་རྫོགས།',
        english: 'Parinirvana anniversary of Panchen Sonam Drakpa – December 23',
        date: 'December 23'
      },
      {
        tibetan: '༥ བོད་ཟླ་ ༡༡ ཚེས་ ༢༦།༢༧། བཅས་ལ་ཡངས་པ་ཅན་གྱི་བསྐང་གསོ་ཆེན་མོ།',
        english: 'The great Fulfill-Revive supplication ceremony of Mahakala and Kalarupa at Yangpachen – January 3–4',
        date: 'Jan 3–4'
      }
    ]
  },

  // ==========================================
  // MONTH 12 (Page 14 of PDF)
  // ==========================================
  {
    monthIndex: 12,
    tibetanMonth: 'བོད་ཟླ་བཅུ་གཉིས་པ།',
    tibetanMonthSub: '(རྒྱལ་ཟླ་བ།)',
    westernRange: 'January – February 2027',
    coverCaption: '༄༅།།ཕྱི་ལོ་༢༠༢༥ ཟླ་༡༢ ཚེས་ ༥ ཉིན་ཆོས་ར་གསར་པའི་ཚོགས་ཁང་དུ་དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དགེ་བཤེས་སྔགས་རམས་པ་རྣམས་ཀྱིས་བཤད་པ་དམ་འཇོག་ལེགས་པར་གྲུབ་ཟིན་པའི་རྣམ་པ།',
    coverCaptionEn: 'Geshe Ngagrampa masters successfully completing their graduation debate dissertation.',
    startDayOfWeek: 5, // Friday
    days: [
      { tibNum: '༡', gregDay: 8, gregMonth: 'Jan', element: 'མགྲོན།', tag: '10th Panchen Lama Parinirvana', isSpecial: true },
      { tibNum: '༢', gregDay: 9, gregMonth: 'Jan', element: 'ཚོང༌།' },
      { tibNum: '༣', gregDay: 10, gregMonth: 'Jan' },
      { tibNum: '༤', gregDay: 11, gregMonth: 'Jan' },
      { tibNum: '༥', gregDay: 12, gregMonth: 'Jan' },
      { tibNum: '༦', gregDay: 13, gregMonth: 'Jan', element: 'མཁར།' },
      { tibNum: '༧', gregDay: 14, gregMonth: 'Jan', element: 'བག' },
      { tibNum: '༨', gregDay: 15, gregMonth: 'Jan', element: 'དུར།' },
      { tibNum: '༩', gregDay: 16, gregMonth: 'Jan' },
      { tibNum: '༡༠', gregDay: 17, gregMonth: 'Jan', naga: true, element: 'ཀླུ་ཐེབས། Naga-Day' },
      { tibNum: '༡༡', gregDay: 18, gregMonth: 'Jan', element: 'མགྲོན།' },
      { tibNum: '༡༢', gregDay: 19, gregMonth: 'Jan' },
      { tibNum: '༡༣', gregDay: 20, gregMonth: 'Jan', element: 'ཡན་ཀྭོང༌།', tag: 'Yamaraja & Vajrabhairava Rituals', isSpecial: true },
      { tibNum: '༡༤', gregDay: 21, gregMonth: 'Jan', sojong: true, element: 'གསོ་སྦྱོང༌།', inauspicious: 'ཉི་ནག' },
      { tibNum: '༡༥', gregDay: 22, gregMonth: 'Jan' },
      { tibNum: '༡༦', gregDay: 23, gregMonth: 'Jan', element: 'མཁར།' },
      { tibNum: '༡༧', gregDay: 24, gregMonth: 'Jan', element: 'བག', tag: 'Iron-Mansion Ceremony Day 1', isSpecial: true },
      { tibNum: '༡༨', gregDay: 25, gregMonth: 'Jan', element: 'དུར།', tag: 'Iron-Mansion Ceremony Day 2' },
      { tibNum: '༡༩', gregDay: 26, gregMonth: 'Jan', element: 'ཡན་ཀྭོང༌།', tag: 'Republic Day of India / Iron-Mansion Day 3', isSpecial: true },
      { tibNum: '༢༠', gregDay: 27, gregMonth: 'Jan', chad: '༢༡ཆད།' },
      { tibNum: '༢༢', gregDay: 28, gregMonth: 'Jan', element: 'ཚོང༌།' },
      { tibNum: '༢༣', gregDay: 29, gregMonth: 'Jan' },
      { tibNum: '༢༤', gregDay: 30, gregMonth: 'Jan', lhag: '༢༤ལྷག' },
      { tibNum: '༢༥', gregDay: 31, gregMonth: 'Jan' },
      { tibNum: '༢༦', gregDay: 1, gregMonth: 'Feb', inauspicious: 'ཞག་ངན།' },
      { tibNum: '༢༧', gregDay: 2, gregMonth: 'Feb', element: 'མཁར།' },
      { tibNum: '༢༨', gregDay: 3, gregMonth: 'Feb', element: 'བག' },
      { tibNum: '༢༩', gregDay: 4, gregMonth: 'Feb', element: 'དུར།' },
      { tibNum: '༢༩', gregDay: 5, gregMonth: 'Feb', sojong: true, element: 'གསོ་སྦྱོང༌།', tag: 'Great Torma-Casting "The Sixty"', isSpecial: true },
      { tibNum: '༣༠', gregDay: 6, gregMonth: 'Feb' }
    ],
    events: [
      {
        tibetan: '༡ བོད་ཟླ་ ༡༢ ཚེས་ ༡ ལ་པཎ་ཆེན་སྐུ་ཕྲེང་བཅུ་པའི་འདས་མཆོད།',
        english: 'Parinirvana anniversary of H.H. the 10th Panchen Lama – January 8',
        date: 'January 8'
      },
      {
        tibetan: '༢ བོད་ཟླ་ ༡༢ ཚེས་ ༡༣ ལ་ལྕགས་མཁར་སྔོན་འགྲོ་ཡ་མ་རཱ་ཛཱ་དབུ་འཛུགས།',
        english: 'Commencement of Yamaraja ritual, preparatory to Iron-Mansion ritual ceremony – January 20',
        date: 'January 20'
      },
      {
        tibetan: '༣ བོད་ཟླ་ ༡༢ ཚེས་ ༡༣ ལ་དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད་ཀྱི་རྩ་རྒྱུད་རྟོག་བདུན་དང་རྟོག་གསུམ་གྱི་འཆད་ཉན།',
        english: 'Start of commentarial explanation on Seventh & Third Chapters of Main Tantra of Vajrabhairava – January 20',
        date: 'January 20'
      },
      {
        tibetan: '༤ བོད་ཟླ་ ༡༢ ཚེས་ ༡༧།༡༨།༡༩ ལ་བོད་བསྟན་སྲིད་ཀྱི་ཞབས་རིམ་ལྕགས་མཁར་ཆེན་མོ།',
        english: 'The great ritual practice ceremony of The Iron-Mansion (benefiting Tibet\'s temporal and spiritual welfare) – January 24, 25, 26',
        date: 'Jan 24–26'
      },
      {
        tibetan: '༥ བོད་ཟླ་ ༡༢ ཚེས་ ༢༩ ལ་དྲུག་ཅུ་མའི་གཏོར་རྒྱག',
        english: 'The great Torma-Casting "The Sixty", performed for the welfare of all sentient beings – February 5',
        date: 'February 5'
      }
    ]
  }
];

export const RETREAT_TRADITIONS = {
  yerpa: {
    titleTb: '༈ དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་དབྱར་ཞལ་བཞེས་དང་འབྲེལ་བའི་བྲག་ཡེར་པའི་ཆོས་ཐོག་སྐོར།',
    titleEn: 'The Drak-Yerpa Summer Retreat Tradition of Gyuto Tantric Monastery',
    summaryTb: 'བྲག་ཡེར་པ་ནི་སྔོན་སྐྱེས་བུ་དམ་པ་དུ་མས་བྱིན་གྱིས་བརླབས་པའི་གནས་མཆོག་དམ་པ་ཞིག་ཡིན། བོད་ཟླ་བདུན་པའི་ཚེས་༡༥ཉིན་དབྱར་ཕྱི་མ་ཞལ་བཞེས་དང་འབྲེལ་བའི་བཞུགས་གདིང་ཡིན། དཔལ་གསང་བ་འདུས། བདེ་མཆོག འཇིགས་བྱེད་སོགས་མཚམས་ཁག་དགུ་དང་། འཆད་ཉན། བསྐང་གསོ་ཆེན་མོ་བཅས་ཚོགས་སྲོལ་ཡོད།',
    summaryEn: 'Drak-Yerpa is a supreme sacred cave hermitage blessed by Guru Padmasambhava, Songtsen Gampo, and Atisha. Starting from the 15th of the 7th Tibetan month, Gyuto monks observe the late summer retreat (Varsika) with nine retreat divisions including Guhyasamaja, Chakrasamvara, and Vajrabhairava, alongside deep tantric commentaries and great protective rituals.'
  },
  sera: {
    titleTb: '༈ དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་སེ་ར་ཆོས་ཐོག',
    titleEn: 'The Sera Monastery Session of Gyuto Tantric Monastery',
    summaryTb: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་འདུས་མང་རྣམས་འཇམ་མགོན་བླ་མ་ཙོང་ཁ་པ་ཆེན་པོའི་དངོས་སློབ་བྱམས་ཆེན་ཆོས་རྗེ་ཤཱཀྱ་ཡེ་ཤེས་ཀྱིས་ཕྱག་བཏབ་པའི་སེ་ར་ཐེག་པ་ཆེན་པོའི་གླིང་དུ་ཕེབས། བོད་ཟླ་ ༦ ཚེས་ ༢༤ ནས་ ༣༠ བར་བདག་བསྐྱེད། བརྩི་བཞག བསྐང་གསོ་བཅས་གནང་སྲོལ་ཡོད།',
    summaryEn: 'The annual dialectical and ritual assembly at Sera Thekchenling Monastery, founded by Jamchen Chöje Shakya Yeshe (direct disciple of Je Tsongkhapa). Observed from the 24th to 30th of the 6th Tibetan month, featuring Guhyasamaja self-empowerment, formal scholastic presentations, and three days of major Mahakala supplications.'
  }
};

/**
 * Helper to get the current date's matching month index and day object in MONTHS_DATA.
 * Returns { monthIdx, dayObj, isMatched }
 */
export function getTodayCalendarInfo(referenceDate = new Date()) {
  const day = referenceDate.getDate();
  const monthAbbrs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthAbbr = monthAbbrs[referenceDate.getMonth()];
  const year = referenceDate.getFullYear();

  for (let mIdx = 0; mIdx < MONTHS_DATA.length; mIdx++) {
    const m = MONTHS_DATA[mIdx];
    const dayObj = m.days.find(d => {
      if (d.gregDay === day && d.gregMonth === monthAbbr) {
        if (m.monthIndex === 12 && (monthAbbr === 'Jan' || monthAbbr === 'Feb')) {
          return year >= 2027;
        }
        if (m.monthIndex === 1 && monthAbbr === 'Feb') {
          return year <= 2026;
        }
        return true;
      }
      return false;
    });

    if (dayObj) {
      return { monthIdx: mIdx, dayObj, isMatched: true };
    }
  }

  // Fallback: match day and month regardless of year
  for (let mIdx = 0; mIdx < MONTHS_DATA.length; mIdx++) {
    const m = MONTHS_DATA[mIdx];
    const dayObj = m.days.find(d => d.gregDay === day && d.gregMonth === monthAbbr);
    if (dayObj) {
      return { monthIdx: mIdx, dayObj, isMatched: true };
    }
  }

  // Default fallback if date is outside range: Month 10 (Nov 14, 2026)
  const defaultMonthIdx = 9;
  const defaultDay = MONTHS_DATA[defaultMonthIdx].days.find(d => d.gregDay === 14 && d.gregMonth === 'Nov') || MONTHS_DATA[defaultMonthIdx].days[0];
  return { monthIdx: defaultMonthIdx, dayObj: defaultDay, isMatched: false };
}

/**
 * Helper to get the upcoming programmes for today / current month.
 * Returns the 3 upcoming events for the current Tibetan monastic calendar month.
 */
export function getCurrentUpcomingProgrammes(referenceDate = new Date()) {
  const todayInfo = getTodayCalendarInfo(referenceDate);
  const currentMonth = MONTHS_DATA[todayInfo.monthIdx];
  const monthIndex = currentMonth ? currentMonth.monthIndex : 1;
  return MONTHLY_UPCOMING_PROGRAMMES[monthIndex] || MONTHLY_UPCOMING_PROGRAMMES[1];
}

/**
 * Monthly Upcoming Programmes / Events mapped to each of the 12 Tibetan months.
 * Automatically updates when the active month changes.
 */
export const MONTHLY_UPCOMING_PROGRAMMES = {
  1: [
    {
      id: 'm1-ev-1',
      month: 'FEB',
      day: '14th',
      year: '2026',
      dateKey: '2026-02-14',
      title: 'Tibetan New Year Celebration',
      desc: 'Join us to mark the beginning of the Tibetan calendar year with auspicious prayers.',
      category: 'Major Festival',
      venue: 'Monastery Grounds & Main Temple',
      monthTb: 'ཕྱི་ཟླ་ ༢',
      dayTb: 'ཚེས་ ༡༤',
      yearTb: '༢༠༢༦',
      titleTb: 'བོད་ཀྱི་ལོ་གསར་དུས་ཆེན་མཛད་སྒོ།',
      descTb: 'བཀྲ་ཤིས་པའི་སྨོན་ལམ་དང་བཅས་བོད་རྒྱལ་ལོའི་འགོ་འཛུགས་སྲུང་བརྩི་ཞུ་བ།',
      categoryTb: 'དུས་ཆེན་ཆེན་མོ།'
    },
    {
      id: 'm1-ev-2',
      month: 'FEB',
      day: '18-20',
      year: '2026',
      dateKey: '2026-02-18',
      title: 'Tibetan New Year (Losar)',
      desc: 'Join us to mark the beginning of the Tibetan calendar year with special tantric pujas.',
      category: 'Major Festival',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༢',
      dayTb: 'ཚེས་ ༡༨-༢༠',
      yearTb: '༢༠༢༦',
      titleTb: 'བོད་ཀྱི་ལོ་གསར་ (ལོ་སར།)',
      descTb: 'དམིགས་བསལ་གསང་སྔགས་ཆོ་ག་དང་བཅས་བོད་རྒྱལ་ལོ་ ༢༡༥༣ མེ་རྟ་ལོའི་ལོ་གསར་སྲུང་བརྩི་མཛད་པ།',
      categoryTb: 'གསང་སྔགས་ཆོ་ག'
    },
    {
      id: 'm1-ev-3',
      month: 'FEB',
      day: '24th',
      year: '2026',
      dateKey: '2026-02-24',
      title: 'Tibetan New Year Celebration',
      desc: 'Consecration of sand mandala and sacred recited ritual assemblies by the monastic assembly.',
      category: 'Sacred Ritual Assembly',
      venue: 'Gyuto Debate Courtyard',
      monthTb: 'ཕྱི་ཟླ་ ༢',
      dayTb: 'ཚེས་ ༢༤',
      yearTb: '༢༠༢༦',
      titleTb: 'བོད་ཀྱི་ལོ་གསར་དུས་ཆེན་མཆོད་འབུལ།',
      descTb: 'རྡུལ་ཚོན་དཀྱིལ་འཁོར་རབ་གནས་དང་དགེ་འདུན་འདུས་པ་རྒྱ་མཚོའི་ཆོས་སྤྱོད་གསུང་འདོན་མཛད་པ།',
      categoryTb: 'དཀྱིལ་འཁོར་ཆོ་ག'
    }
  ],
  2: [
    {
      id: 'm2-ev-1',
      month: 'MAR',
      day: '24th',
      year: '2026',
      dateKey: '2026-03-24',
      title: 'Founder Parinirvana Anniversary',
      desc: 'The Parinirvana Anniversary of Gyudchen Kunga Dhondup, the supreme Founder of Gyuto Tantric Monastery.',
      category: 'Parinirvana Observance',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༣',
      dayTb: 'ཚེས་ ༢༤',
      yearTb: '༢༠༢༦',
      titleTb: '༸རྒྱུད་ཆེན་ཀུན་དགའ་དོན་གྲུབ་ཀྱི་འདས་མཆོད།',
      descTb: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་ཕྱག་འདེབས་པ་པོ་༸རྒྱུད་ཆེན་ཀུན་དགའ་དོན་གྲུབ་དཔལ་བཟང་པོ་མཆོག་གི་འདས་མཆོད་སྲུང་བརྩི།',
      categoryTb: 'འདས་མཆོད་ཆེན་མོ།'
    },
    {
      id: 'm2-ev-2',
      month: 'MAR',
      day: '30th',
      year: '2026',
      dateKey: '2026-03-30',
      title: 'Ramoche Heruka Great Self-Empowerment',
      desc: 'Heruka Great Self-Empowerment of the historic Ramoche Temple upholding the esoteric lineage.',
      category: 'Tantric Self-Initiation',
      venue: 'Ramoche Inner Temple',
      monthTb: 'ཕྱི་ཟླ་ ༣',
      dayTb: 'ཚེས་ ༣༠',
      yearTb: '༢༠༢༦',
      titleTb: 'ར་མོ་ཆེའི་བདེ་མཆོག་བདག་འཇུག་ཆེན་མོ།',
      descTb: 'ལོ་རྒྱུས་ལྡན་པའི་ར་མོ་ཆེའི་གཙུག་ལག་ཁང་དུ་དཔལ་འཁོར་ལོ་བདེ་མཆོག་གི་བདག་འཇུག་ཆེན་མོ་མཛད་པ།',
      categoryTb: 'གསང་སྔགས་བདག་འཇུག'
    },
    {
      id: 'm2-ev-3',
      month: 'APR',
      day: '16th',
      year: '2026',
      dateKey: '2026-04-16',
      title: 'Lobur Lechol Ritual Practice',
      desc: 'The reliance for an immediate performing of benevolent deeds and protective ritual practices.',
      category: 'Protective Rites',
      venue: 'Mahakala Gonkhang Shrine',
      monthTb: 'ཕྱི་ཟླ་ ༤',
      dayTb: 'ཚེས་ ༡༦',
      yearTb: '༢༠༢༦',
      titleTb: 'གློ་བུར་ལས་བཅོལ་ཆོ་ག',
      descTb: 'གློ་བུར་ལས་བཅོལ་གྱི་ཆོ་ག་དང་བསྟན་སྲུང་རྒྱ་མཚོའི་ཐུགས་དམ་བསྐང་བའི་མཛད་སྒོ།',
      categoryTb: 'ཆོས་སྐྱོང་ཆོ་ག'
    }
  ],
  3: [
    {
      id: 'm3-ev-1',
      month: 'APR',
      day: '25th',
      year: '2026',
      dateKey: '2026-04-25',
      title: "11th Panchen Lama's Birthday",
      desc: "Celebrations and prayer assemblies for the longevity and welfare of the 11th Panchen Erdeni Choekyi Gyalpo.",
      category: 'Buddhist Observance',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༤',
      dayTb: 'ཚེས་ ༢༥',
      yearTb: '༢༠༢༦',
      titleTb: 'ཀུན་གཟིགས་པཎ་ཆེན་རིན་པོ་ཆེའི་འཁྲུངས་སྐར།',
      descTb: 'ཀུན་གཟིགས་པཎ་ཆེན་སྐུ་ཕྲེང་བཅུ་གཅིག་པ་དགེ་འདུན་ཆོས་ཀྱི་ཉི་མ་མཆོག་གི་འཁྲུངས་སྐར་དུས་ཆེན་སྲུང་བརྩི།',
      categoryTb: 'འཁྲུངས་སྐར་དུས་ཆེན།'
    },
    {
      id: 'm3-ev-2',
      month: 'MAY',
      day: '4th',
      year: '2026',
      dateKey: '2026-05-04',
      title: 'Guhyasamaja Mandala Preparation',
      desc: 'Intricate preparation of the sacred sand mandala and preparatory tantric recitations.',
      category: 'Tantric Ritual',
      venue: 'Tsuklakhang Inner Sanctuary',
      monthTb: 'ཕྱི་ཟླ་ ༥',
      dayTb: 'ཚེས་ ༤',
      yearTb: '༢༠༢༦',
      titleTb: 'གསང་འདུས་རྡུལ་ཚོན་དཀྱིལ་འཁོར་གྲ་སྒྲིག',
      descTb: 'དཔལ་གསང་བ་འདུས་པའི་རྡུལ་ཚོན་དཀྱིལ་འཁོར་གྱི་གྲ་སྒྲིག་དང་སྔོན་འགྲོའི་ཆོས་སྤྱོད་མཛད་པ།',
      categoryTb: 'དཀྱིལ་འཁོར་ཆོ་ག'
    },
    {
      id: 'm3-ev-3',
      month: 'MAY',
      day: '12th',
      year: '2026',
      dateKey: '2026-05-12',
      title: 'Formal Reverence Offering to the Abbot',
      desc: 'Formal ceremony offering highest reverence, long-life prayers, and gratitude to the Abbot.',
      category: 'Monastic Ceremony',
      venue: 'Main Assembly Hall',
      monthTb: 'ཕྱི་ཟླ་ ༥',
      dayTb: 'ཚེས་ ༡༢',
      yearTb: '༢༠༢༦',
      titleTb: 'མཁན་རིན་པོ་ཆེར་བརྟན་བཞུགས་བསྟར་འབུལ།',
      descTb: 'དཔལ་ལྡན་རྒྱུད་སྟོད་གྲྭ་ཚང་གི་མཁན་རིན་པོ་ཆེ་མཆོག་ལ་གུས་བཀུར་དང་བརྟན་བཞུགས་བསྟར་འབུལ་མཛད་པ།',
      categoryTb: 'བརྟན་བཞུགས་མཛད་སྒོ།'
    }
  ],
  4: [
    {
      id: 'm4-ev-1',
      month: 'MAY',
      day: '23-25',
      year: '2026',
      dateKey: '2026-05-23',
      title: 'Harmonic Tantric Chanting Ceremony',
      desc: 'Major ceremony involving harmonic chordal chanting in relying for assistance from Yamantaka.',
      category: 'Tantric Chanting',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༥',
      dayTb: 'ཚེས་ ༢༣-༢༥',
      yearTb: '༢༠༢༦',
      titleTb: 'རྒྱུད་སྟོད་དབྱངས་རྟ་ཆེན་མོའི་སྒྲུབ་པ།',
      descTb: 'དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད་ཀྱི་དབྱངས་རྟ་དམིགས་བསལ་གྱིས་གསུང་འདོན་དང་ལས་བཅོལ་མཛད་པ།',
      categoryTb: 'གསང་སྔགས་ཆོ་ག'
    },
    {
      id: 'm4-ev-2',
      month: 'MAY',
      day: '31st',
      year: '2026',
      dateKey: '2026-05-31',
      title: 'Saga Dawa Duchen (Buddha Day)',
      desc: 'Celebrating Lord Buddha Shakyamuni’s birth, enlightenment, and Parinirvana with 100,000-fold merit.',
      category: 'Major Buddhist Holy Day',
      venue: 'Tsuklakhang & Monastery Perimeter',
      monthTb: 'ཕྱི་ཟླ་ ༥',
      dayTb: 'ཚེས་ ༣༡',
      yearTb: '༢༠༢༦',
      titleTb: 'ས་ག་ཟླ་བའི་དུས་ཆེན་ཆེན་མོ།',
      descTb: 'སྟོན་པ་ཤཱཀྱ་ཐུབ་པའི་སྐུ་བལྟམས་པ་དང་། སངས་རྒྱས་པ། མྱ་ངན་ལས་འདས་པའི་དུས་ཆེན་ཁྱད་པར་ཅན།',
      categoryTb: 'དུས་ཆེན་ཆེན་མོ།'
    },
    {
      id: 'm4-ev-3',
      month: 'JUN',
      day: '15th',
      year: '2026',
      dateKey: '2026-06-15',
      title: 'Guhyasamaja Great Self-Empowerment',
      desc: 'The Great Self-Empowerment of Guhyasamaja, of the sacred Gadhen Sumdo lineage.',
      category: 'Tantric Self-Initiation',
      venue: 'Tantric College Inner Shrine',
      monthTb: 'ཕྱི་ཟླ་ ༦',
      dayTb: 'ཚེས་ ༡༥',
      yearTb: '༢༠༢༦',
      titleTb: 'དགའ་ལྡན་གསང་འདུས་བདག་འཇུག་ཆེན་མོ།',
      descTb: 'དགའ་ལྡན་ལུགས་ཀྱི་དཔལ་གསང་བ་འདུས་པའི་བདག་འཇུག་ཆེན་མོའི་སྒྲུབ་པ་མཛད་པ།',
      categoryTb: 'བདག་འཇུག་ཆེན་མོ།'
    }
  ],
  5: [
    {
      id: 'm5-ev-1',
      month: 'JUN',
      day: '29th',
      year: '2026',
      dateKey: '2026-06-29',
      title: 'Universal Prayer Day (Zamling Chisang)',
      desc: 'World Incense Day featuring extensive Sang-sol aromatic incense offerings and global peace prayers.',
      category: 'Public Festival',
      venue: 'Monastery Stupa Courtyard',
      monthTb: 'ཕྱི་ཟླ་ ༦',
      dayTb: 'ཚེས་ ༢༩',
      yearTb: '༢༠༢༦',
      titleTb: 'འཛམ་གླིང་སྤྱི་བསང་དུས་ཆེན།',
      descTb: 'འཛམ་གླིང་ཞི་བདེ་དང་བསྟན་འགྲོའི་བདེ་དོན་དུ་བསང་གསོལ་རྒྱ་ཆེན་འབུལ་བའི་དུས་ཆེན།',
      categoryTb: 'མང་ཚོགས་དུས་ཆེན།'
    },
    {
      id: 'm5-ev-2',
      month: 'JUL',
      day: '6th',
      year: '2026',
      dateKey: '2026-07-06',
      title: "H.H. The 14th Dalai Lama's Birthday",
      desc: 'Celebration of His Holiness the Dalai Lama’s auspicious birthday with grand long-life prayers (Tenshug).',
      category: 'Major Buddhist Celebration',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༧',
      dayTb: 'ཚེས་ ༦',
      yearTb: '༢༠༢༦',
      titleTb: '༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོའི་འཁྲུངས་སྐར།',
      descTb: 'སྤྱི་ནོར་༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོ་མཆོག་གི་སྐུའི་འཁྲུངས་སྐར་དུས་ཆེན་བརྟན་བཞུགས་དང་བཅས་སྲུང་བརྩི།',
      categoryTb: 'འཁྲུངས་སྐར་དུས་ཆེན།'
    },
    {
      id: 'm5-ev-3',
      month: 'JUL',
      day: '11-13',
      year: '2026',
      dateKey: '2026-07-11',
      title: 'The Great Kangso of Ramoche',
      desc: 'Three-day major ceremony of Mahakala and Kalarupa with deep overtone chords and sacred tea offerings.',
      category: 'Protective Ceremony',
      venue: 'Ramoche Inner Temple',
      monthTb: 'ཕྱི་ཟླ་ ༧',
      dayTb: 'ཚེས་ ༡༡-༡༣',
      yearTb: '༢༠༢༦',
      titleTb: 'ར་མོ་ཆེའི་བསྐང་གསོ་ཆེན་མོ།',
      descTb: 'ཆོས་སྐྱོང་མགོན་པོ་དང་ལས་གཤིན་གྱི་བསྐང་གསོ་ཆེན་མོ་ཉིན་གསུམ་རིང་འཚོགས་པ།',
      categoryTb: 'བསྐང་གསོ་ཆེན་མོ།'
    }
  ],
  6: [
    {
      id: 'm6-ev-1',
      month: 'JUL',
      day: '17th',
      year: '2026',
      dateKey: '2026-07-17',
      title: 'Cloth-Painted Mandala Consecration',
      desc: 'The Great Consecration Ceremony based on a mandala painted on cloth with comprehensive ritual prayers.',
      category: 'Tantric Consecration',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༧',
      dayTb: 'ཚེས་ ༡༧',
      yearTb: '༢༠༢༦',
      titleTb: 'རས་བྲིས་དཀྱིལ་འཁོར་གྱི་རབ་གནས་ཆེན་མོ།',
      descTb: 'རས་བྲིས་དཀྱིལ་འཁོར་ལ་བརྟེན་པའི་རབ་གནས་དགེ་ལེགས་ཆར་འབེབས་ཀྱི་ཆོ་ག་མཛད་པ།',
      categoryTb: 'རབ་གནས་ཆེན་མོ།'
    },
    {
      id: 'm6-ev-2',
      month: 'JUL',
      day: '18th',
      year: '2026',
      dateKey: '2026-07-18',
      title: 'Chokhor Duchen (First Teaching)',
      desc: 'Anniversary commemorating Lord Buddha Shakyamuni’s First Turning of the Wheel of Dharma.',
      category: 'Major Buddhist Holy Day',
      venue: 'Monastery Temple & Grounds',
      monthTb: 'ཕྱི་ཟླ་ ༧',
      dayTb: 'ཚེས་ ༡༨',
      yearTb: '༢༠༢༦',
      titleTb: 'ཆོས་འཁོར་དུས་ཆེན་ (ཆོས་འཁོར་བསྐོར་བ།)',
      descTb: 'སྟོན་པ་བཅོམ་ལྡན་འདས་ཀྱིས་བདེན་བཞིའི་ཆོས་འཁོར་ཐོག་མར་བསྐོར་བའི་དུས་ཆེན་ཁྱད་པར་ཅན།',
      categoryTb: 'དུས་ཆེན་ཆེན་མོ།'
    },
    {
      id: 'm6-ev-3',
      month: 'JUL',
      day: '28th',
      year: '2026',
      dateKey: '2026-07-28',
      title: 'Ramoche Guhyasamaja Empowerment',
      desc: 'The Great Self-Empowerment of Guhyasamaja upholding the sacred Ramoche sanctuary traditions.',
      category: 'Tantric Self-Initiation',
      venue: 'Ramoche Inner Sanctuary',
      monthTb: 'ཕྱི་ཟླ་ ༧',
      dayTb: 'ཚེས་ ༢༨',
      yearTb: '༢༠༢༦',
      titleTb: 'ར་མོ་ཆེའི་གསང་འདུས་བདག་འཇུག',
      descTb: 'ལོ་རྒྱུས་ལྡན་པའི་ར་མོ་ཆེའི་གསང་འདུས་བདག་འཇུག་ཆེན་མོའི་སྒྲུབ་པ་མཛད་པ།',
      categoryTb: 'བདག་འཇུག་ཆེན་མོ།'
    }
  ],
  7: [
    {
      id: 'm7-ev-1',
      month: 'AUG',
      day: '19-22',
      year: '2026',
      dateKey: '2026-08-19',
      title: 'Annual Monastic Tantric Examinations',
      desc: 'Annual examinations on tantric rituals, deep chordal memorization, and ceremonial recitations.',
      category: 'Monastic Examination',
      venue: 'Gyuto Debate Courtyard',
      monthTb: 'ཕྱི་ཟླ་ ༨',
      dayTb: 'ཚེས་ ༡༩-༢༢',
      yearTb: '༢༠༢༦',
      titleTb: 'གསང་སྔགས་ཆོ་ག་ཕྱག་ལེན་གྱི་རྒྱུགས་སྤྲོད།',
      descTb: 'ལོ་འཁོར་གསང་སྔགས་ཆོ་ག་ཕྱག་ལེན་དང་དབྱངས་རྟ་བློ་འཛིན་གྱི་རྒྱུགས་སྤྲོད་ཆེན་མོ།',
      categoryTb: 'རྒྱུགས་སྤྲོད་ཆེན་མོ།'
    },
    {
      id: 'm7-ev-2',
      month: 'AUG',
      day: '28th',
      year: '2026',
      dateKey: '2026-08-28',
      title: 'Varsika Summer Retreat Commencement',
      desc: 'Commencement of the traditional monastic rains retreat (Yarne) with intensive Vinaya discipline.',
      category: 'Monastic Observance',
      venue: 'Main Assembly Hall',
      monthTb: 'ཕྱི་ཟླ་ ༨',
      dayTb: 'ཚེས་ ༢༨',
      yearTb: '༢༠༢༦',
      titleTb: 'དབྱར་གནས་དབུ་འཛུགས།',
      descTb: 'དགེ་འདུན་པའི་དབྱར་གནས་དམ་བཅའ་དང་བཅས་འདུལ་བའི་བཅའ་ཁྲིམས་ལྟར་དབུ་འཛུགས་པ།',
      categoryTb: 'དབྱར་གནས་ཆེན་མོ།'
    },
    {
      id: 'm7-ev-3',
      month: 'SEP',
      day: '8-10',
      year: '2026',
      dateKey: '2026-09-08',
      title: 'The Great Kangso of Drak-Yerpa',
      desc: 'Three days of extensive protective ceremonies and gratitude pujas following the Yerpa retreat tradition.',
      category: 'Protective Ceremony',
      venue: 'Mahakala Gonkhang Shrine',
      monthTb: 'ཕྱི་ཟླ་ ༩',
      dayTb: 'ཚེས་ ༨-༡༠',
      yearTb: '༢༠༢༦',
      titleTb: 'བྲག་ཡེར་པའི་བསྐང་གསོ་ཆེན་མོ།',
      descTb: 'བྲག་ཡེར་པའི་ཆོས་ཐོག་དང་འབྲེལ་བའི་བསྟན་སྲུང་དམ་ཅན་རྒྱ་མཚོའི་བསྐང་གསོ་ཆེན་མོ།',
      categoryTb: 'བསྐང་གསོ་ཆེན་མོ།'
    }
  ],
  8: [
    {
      id: 'm8-ev-1',
      month: 'SEP',
      day: '17th',
      year: '2026',
      dateKey: '2026-09-17',
      title: 'Yerpa Dhunkye Chakrasamvara Practice',
      desc: 'Chakrasamvara practice through self-generated visualisation and extensive tantric ritual offerings.',
      category: 'Tantric Ritual',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༩',
      dayTb: 'ཚེས་ ༡༧',
      yearTb: '༢༠༢༦',
      titleTb: 'ཡེར་པ་མདུན་བསྐྱེད་བདེ་མཆོག་སྒྲུབ་པ།',
      descTb: 'དཔལ་འཁོར་ལོ་བདེ་མཆོག་གི་མདུན་བསྐྱེད་དང་བཅས་པའི་གསང་སྔགས་སྒྲུབ་པ་མཛད་པ།',
      categoryTb: 'གསང་སྔགས་སྒྲུབ་པ།'
    },
    {
      id: 'm8-ev-2',
      month: 'SEP',
      day: '19-25',
      year: '2026',
      dateKey: '2026-09-19',
      title: 'Mandala Construction Training',
      desc: 'Comprehensive training and examinations on mandala dimensions of Guhyasamaja, Heruka, and Yamantaka.',
      category: 'Mandala Sacred Art',
      venue: 'Gyuto Art & Meditation Hall',
      monthTb: 'ཕྱི་ཟླ་ ༩',
      dayTb: 'ཚེས་ ༡༩-༢༥',
      yearTb: '༢༠༢༦',
      titleTb: 'དཀྱིལ་འཁོར་ཐིག་རྩའི་སྦྱོང་བརྡར།',
      descTb: 'གསང་འདུས་དང་བདེ་མཆོག་འཇིགས་བྱེད་ཀྱི་དཀྱིལ་འཁོར་ཐིག་རྩའི་སྦྱོང་བརྡར་དང་རྒྱུགས་སྤྲོད།',
      categoryTb: 'དཀྱིལ་འཁོར་སྦྱོང་བརྡར།'
    },
    {
      id: 'm8-ev-3',
      month: 'OCT',
      day: '7th',
      year: '2026',
      dateKey: '2026-10-07',
      title: 'Major Mahakala Fulfill-Revive Puja',
      desc: 'Major Fulfill-Revive supplication ceremony of Mahakala, Palden Lhamo, and Kalarupa for clearing obstacles.',
      category: 'Protective Rites',
      venue: 'Mahakala Gonkhang Shrine',
      monthTb: 'ཕྱི་ཟླ་ ༡༠',
      dayTb: 'ཚེས་ ༧',
      yearTb: '༢༠༢༦',
      titleTb: 'ཆོས་སྐྱོང་བསྐང་གསོ་ཆེན་མོ།',
      descTb: 'མགོན་པོ་ཕྱག་དྲུག་པ་དང་དཔལ་ལྡན་ལྷ་མོའི་བསྐང་གསོ་རྒྱས་པ་ཚོགས་པ།',
      categoryTb: 'ཆོས་སྐྱོང་བསྐང་གསོ།'
    }
  ],
  9: [
    {
      id: 'm9-ev-1',
      month: 'OCT',
      day: '17th',
      year: '2026',
      dateKey: '2026-10-17',
      title: 'Jetsun Kunga Dhondup Dialectical Debates',
      desc: 'Dialectical debate of Geshes based on Jetsun Kunga Dhondup’s foundational tantric commentaries.',
      category: 'Scholastic Debate',
      venue: 'Gyuto Debate Courtyard',
      monthTb: 'ཕྱི་ཟླ་ ༡༠',
      dayTb: 'ཚེས་ ༡༧',
      yearTb: '༢༠༢༦',
      titleTb: 'རྗེ་བཙུན་ཀུན་དགའ་དོན་གྲུབ་ཀྱི་རྩོད་རྒྱུག',
      descTb: 'རྒྱུད་ཆེན་ཀུན་དགའ་དོན་གྲུབ་ཀྱི་གསུང་རྩོམ་ཁག་ལ་གཞི་བཅོལ་བའི་དགེ་བཤེས་རྣམས་ཀྱི་དམ་བཅའ།',
      categoryTb: 'མཚན་ཉིད་དམ་བཅའ།'
    },
    {
      id: 'm9-ev-2',
      month: 'OCT',
      day: '22nd',
      year: '2026',
      dateKey: '2026-10-22',
      title: 'Vajrabhairava (Yamantaka) Consecration',
      desc: 'The Great Consecration Ceremony through Vajrabhairava deity invoking wisdom and wrathful protection.',
      category: 'Tantric Consecration',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༡༠',
      dayTb: 'ཚེས་ ༢༢',
      yearTb: '༢༠༢༦',
      titleTb: 'དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད་ཀྱི་རབ་གནས་ཆེན་མོ།',
      descTb: 'དཔལ་རྡོ་རྗེ་འཇིགས་བྱེད་ལ་བརྟེན་པའི་རབ་གནས་དགེ་ལེགས་ཆར་འབེབས་ཀྱི་ཆོ་ག་མཛད་པ།',
      categoryTb: 'རབ་གནས་ཆེན་མོ།'
    },
    {
      id: 'm9-ev-3',
      month: 'NOV',
      day: '1st',
      year: '2026',
      dateKey: '2026-11-01',
      title: 'Lhabab Duchen (Descent from Heaven)',
      desc: 'Celebrating Buddha’s descent from Tushita Heaven after teaching his mother, multiplying karma 100,000x.',
      category: 'Major Buddhist Holy Day',
      venue: 'Monastery Grounds & Tsuklakhang',
      monthTb: 'ཕྱི་ཟླ་ ༡༡',
      dayTb: 'ཚེས་ ༡',
      yearTb: '༢༠༢༦',
      titleTb: 'ལྷ་བབས་དུས་ཆེན་ཆེན་མོ།',
      descTb: 'སྟོན་པ་བཅོམ་ལྡན་འདས་སུམ་ཅུ་རྩ་གསུམ་གྱི་ལྷ་ཡུལ་ནས་མར་འབབས་པའི་དུས་ཆེན་ཁྱད་པར་ཅན།',
      categoryTb: 'དུས་ཆེན་ཆེན་མོ།'
    }
  ],
  10: [
    {
      id: 'm10-ev-1',
      month: 'NOV',
      day: '17th',
      year: '2026',
      dateKey: '2026-11-17',
      title: 'Dialectical Discussions on Mantra',
      desc: 'Dialectical discussions and debates on Secret Mantra of the latter summer semester.',
      category: 'Tantric Scholasticism',
      venue: 'Gyuto Debate Courtyard',
      monthTb: 'ཕྱི་ཟླ་ ༡༡',
      dayTb: 'ཚེས་ ༡༧',
      yearTb: '༢༠༢༦',
      titleTb: 'གསང་སྔགས་ཀྱི་ཆོས་ཐོག་རྩོད་པ།',
      descTb: 'དབྱར་ཆོས་ཕྱི་མའི་གསང་སྔགས་ཀྱི་གཞུང་ལུགས་ཁག་ལ་བགྲོ་གླེང་དང་རྩོད་པའི་ཚོགས་པ།',
      categoryTb: 'མཚན་ཉིད་དམ་བཅའ།'
    },
    {
      id: 'm10-ev-2',
      month: 'NOV',
      day: '26th',
      year: '2026',
      dateKey: '2026-11-26',
      title: 'Mahakala Great Torma Offering',
      desc: 'The Great Torma Offering and Casting ceremony through Mahakala performed at Potala Summit.',
      category: 'Wrathful Torma Ritual',
      venue: 'Monastery Summit Sanctuary',
      monthTb: 'ཕྱི་ཟླ་ ༡༡',
      dayTb: 'ཚེས་ ༢༦',
      yearTb: '༢༠༢༦',
      titleTb: 'མགོན་པོའི་གཏོར་ཆེན་འཕེན་པའི་ཆོ་ག',
      descTb: 'ཆོས་སྐྱོང་མགོན་པོ་ལ་བརྟེན་པའི་གཏོར་རྒྱག་དང་བར་ཆད་ཀུན་སེལ་གྱི་མཛད་སྒོ།',
      categoryTb: 'གཏོར་རྒྱག་ཆེན་མོ།'
    },
    {
      id: 'm10-ev-3',
      month: 'DEC',
      day: '3rd',
      year: '2026',
      dateKey: '2026-12-03',
      title: 'Ganden Ngamchoe (Je Tsongkhapa)',
      desc: 'Parinirvana anniversary of Je Tsongkhapa celebrated with thousands of butter lamps lighting up the night.',
      category: 'Major Buddhist Festival',
      venue: 'Tsuklakhang & Monastery Roofs',
      monthTb: 'ཕྱི་ཟླ་ ༡༢',
      dayTb: 'ཚེས་ ༣',
      yearTb: '༢༠༢༦',
      titleTb: 'དགའ་ལྡན་ལྔ་མཆོད་ཆེན་མོ།',
      descTb: 'འཇམ་མགོན་བླ་མ་ཙོང་ཁ་པ་ཆེན་པོའི་དགོངས་རྫོགས་དུས་ཆེན་མར་མེའི་མཆོད་འབུལ་ཁྱད་པར་ཅན།',
      categoryTb: 'དུས་ཆེན་ཆེན་མོ།'
    }
  ],
  11: [
    {
      id: 'm11-ev-1',
      month: 'DEC',
      day: '10th',
      year: '2026',
      dateKey: '2026-12-10',
      title: 'Nobel Peace Prize Commemoration',
      desc: 'Commemoration of the conferment of the Nobel Peace Prize upon H.H. the 14th Dalai Lama.',
      category: 'Peace Day Commemoration',
      venue: 'Main Assembly Hall & Courtyard',
      monthTb: 'ཕྱི་ཟླ་ ༡༢',
      dayTb: 'ཚེས་ ༡༠',
      yearTb: '༢༠༢༦',
      titleTb: 'ནོ་བྷེལ་ཞི་བདེའི་གཟེངས་རྟགས་དུས་དྲན།',
      descTb: 'སྤྱི་ནོར་༸གོང་ས་༸སྐྱབས་མགོན་ཆེན་པོ་མཆོག་ལ་ནོ་བྷེལ་ཞི་བདེའི་གཟེངས་རྟགས་འབུལ་བཞེས་མཛད་པའི་དུས་དྲན།',
      categoryTb: 'གཞུང་འབྲེལ་དུས་དྲན།'
    },
    {
      id: 'm11-ev-2',
      month: 'DEC',
      day: '23rd',
      year: '2026',
      dateKey: '2026-12-23',
      title: 'Panchen Sonam Drakpa Parinirvana',
      desc: 'Parinirvana anniversary and memorial service honoring the scholarly master Panchen Sonam Drakpa.',
      category: 'Parinirvana Observance',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༡༢',
      dayTb: 'ཚེས་ ༢༣',
      yearTb: '༢༠༢༦',
      titleTb: 'པཎ་ཆེན་བསོད་ནམས་གྲགས་པའི་དགོངས་རྫོགས།',
      descTb: 'མཁས་གྲུབ་པཎ་ཆེན་བསོད་ནམས་གྲགས་པའི་དགོངས་རྫོགས་མཆོད་འབུལ་མཛད་པ།',
      categoryTb: 'འདས་མཆོད་ཆེན་མོ།'
    },
    {
      id: 'm11-ev-3',
      month: 'JAN',
      day: '3-4',
      year: '2027',
      dateKey: '2027-01-03',
      title: 'Major Mahakala Fulfill-Revive Supplication',
      desc: 'The great Fulfill-Revive supplication ceremony of Mahakala and protective deities welcoming the new year.',
      category: 'Protective Ceremony',
      venue: 'Mahakala Gonkhang Shrine',
      monthTb: 'ཕྱི་ཟླ་ ༡',
      dayTb: 'ཚེས་ ༣-༤',
      yearTb: '༢༠༢༧',
      titleTb: 'ཆོས་སྐྱོང་བསྐང་གསོ་ཆེན་མོ།',
      descTb: 'བསྟན་སྲུང་དམ་ཅན་རྒྱ་མཚོའི་ཐུགས་དམ་བསྐང་ཞིང་བར་ཆད་ཀུན་སེལ་ཆེད་བསྐང་གསོ་གནང་བ།',
      categoryTb: 'བསྐང་གསོ་ཆེན་མོ།'
    }
  ],
  12: [
    {
      id: 'm12-ev-1',
      month: 'JAN',
      day: '8th',
      year: '2027',
      dateKey: '2027-01-08',
      title: "10th Panchen Lama's Parinirvana",
      desc: 'Memorial service and grand butter lamp offerings honoring the late 10th Panchen Erdeni Choekyi Gyaltsen.',
      category: 'Parinirvana Observance',
      venue: 'Main Assembly Tsuklakhang Hall',
      monthTb: 'ཕྱི་ཟླ་ ༡',
      dayTb: 'ཚེས་ ༨',
      yearTb: '༢༠༢༧',
      titleTb: 'པཎ་ཆེན་སྐུ་ཕྲེང་བཅུ་པའི་དགོངས་རྫོགས།',
      descTb: 'ཀུན་གཟིགས་པཎ་ཆེན་སྐུ་ཕྲེང་བཅུ་པ་ཆོས་ཀྱི་རྒྱལ་མཚན་མཆོག་གི་དགོངས་རྫོགས་མཆོད་འབུལ།',
      categoryTb: 'འདས་མཆོད་ཆེན་མོ།'
    },
    {
      id: 'm12-ev-2',
      month: 'JAN',
      day: '24-26',
      year: '2027',
      dateKey: '2027-01-24',
      title: 'The Iron-Mansion Ritual Practice',
      desc: 'The great ritual practice ceremony of The Iron-Mansion for the ultimate benefit of all sentient beings.',
      category: 'Tantric Ritual',
      venue: 'Inner Sanctuary & Tsuklakhang',
      monthTb: 'ཕྱི་ཟླ་ ༡',
      dayTb: 'ཚེས་ ༢༤-༢༦',
      yearTb: '༢༠༢༧',
      titleTb: 'ལྕགས་མཁར་ཆེན་མོའི་སྒྲུབ་པ།',
      descTb: 'འགྲོ་བ་ཀུན་གྱི་དོན་དུ་ལྕགས་མཁར་ཆེན་མོའི་སྒྲུབ་མཆོད་རྒྱས་པ་མཛད་པ།',
      categoryTb: 'གསང་སྔགས་ཆོ་ག'
    },
    {
      id: 'm12-ev-3',
      month: 'FEB',
      day: '5th',
      year: '2027',
      dateKey: '2027-02-05',
      title: 'Torma-Casting "The Sixty"',
      desc: 'The sacred end-of-year Torma-Casting "The Sixty" (Drugchuma) performed for world peace and obstacle removal.',
      category: 'End-of-Year Torma Rites',
      venue: 'Tsuklakhang & Outdoor Ritual Ground',
      monthTb: 'ཕྱི་ཟླ་ ༢',
      dayTb: 'ཚེས་ ༥',
      yearTb: '༢༠༢༧',
      titleTb: 'དྲུག་ཅུ་མའི་གཏོར་རྒྱག',
      descTb: 'ལོ་མཇུག་གི་བར་ཆད་ཀུན་སེལ་ཆེད་དྲུག་ཅུ་མའི་གཏོར་རྒྱག་ཆེན་མོ་མཛད་པ།',
      categoryTb: 'གཏོར་རྒྱག་ཆེན་མོ།'
    }
  ]
};

