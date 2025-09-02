const testimonials = [
    {
        author: 'Michelle O.',
        text: 'Quick, professional, and minimal discomfort and pain. I highly recommend it. A dentist by vocation, not a money-grabbing butcher.'
	},
	{
		author: 'Lesedi P.',
		text: 'I am very impressed with the professional approach of the medical staff at Dr. PT Lekalakala office. There is a pleasant atmosphere. The professional approach and extensive expertise of the attending physician made me feel comfortable. The professional tools and modern equipment in the office also contributed to my positive impression. The root canal treatment was performed without complications and with great pain relief',
	},
	{
		author: 'Marcin L.',
		text: 'I decided to have porcelain crowns made by Dr. Piasecki. I was a little worried about grinding my teeth. I guess I shouldnt have been, as everything went smoothly. No pain. I am very pleased with my new smile. I recommend Dr. Lekalakala office to everyone. The prices are very reasonable. The office has modern equipment. The doctor is friendly and has a sense of humor',
	},
	{
		author: 'Barbara O.',
		text: 'A great doctor, very approachable. One of the most thorough in Standerton and, most importantly, very good value for money. I highly recommend him.',
	},
	{
		author: 'Zakhele P.',
		text: 'Dr. lekalakala is truly recommendable and, in my opinion, the best dentist in Toruń. Everything is thorough, painless, and in a pleasant and friendly atmosphere. If you are in pain, they always find an appointment, which is very important. The office is very clean, nice, and pleasant. A beautiful smile without pain is only possible with Dr. PT Lekalakala. First-class! I highly recommend him',
	},
	{
		author: 'Thato B.',
		text: 'Professional, friendly, and, most importantly, with extensive knowledge and experience. This is my second visit with the doctor, and as always, I leave satisfied.',
	},
	{
		author: 'Makhosi.',
		text: 'A dream dentist! Sleepless nights, worry, avoidance, pretending there is no problem, and the embarrassment of opening your mouth wide. All of this took years. Dr. Lekalakala has a magical ability to pull a patient together and organize everything around them so well that before I knew it, I woke up in a different intraoral reality. Thank you',
	},
];

const prevBtn = document.querySelector('.testimonials__button--prev');
const nextBtn = document.querySelector('.testimonials__button--next');
let testimonialText = document.querySelector('.testimonials__card__text');
let testimonialAuthor = document.querySelector('.testimonials__card__author');

// Current testimonial
let i = 0;

const displayTestimonial = () => {
	testimonialText.textContent = testimonials[i].text;
	testimonialAuthor.textContent = testimonials[i].author;
};

nextBtn.addEventListener('click', () => {
	i = (testimonials.length + i + 1) % testimonials.length;
	displayTestimonial();
});

prevBtn.addEventListener('click', () => {
	i = (testimonials.length + i - 1) % testimonials.length;
	displayTestimonial();
});
