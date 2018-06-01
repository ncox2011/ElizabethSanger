const ElizabetheSanger = {
    congressionalDistrict: 5,
    platformStatements: {
        taxes: "I will lower tax rates",
        jobs: "I will create more jobs",
        Infrastructure: "Build infrastructure",
        HealthCare: "Make healthcare more affordable",
        crimeAndEnforcement: "Enact a no tolerance policy"
},

donation: "https://secure.actblue.com/donate/gillibrand_homepage",

calendar: [
        {
            date1: "May 29",
            event1: "Meet and Greet"
        },
        {
            date2: "May 30",
            event2: "Hang door fliers"
        },
        {
            date3: "June 1",
            event3: "Fundraiser"
        }
    ],

volunteerInformation: [ 
    {
        fullName: "Natasha Cox",
        address: "708 Montgomery St",
        email: "natashac@gmail.cocm",
        phoneNumber: "555-555-5555",
        availability: ["Saturday and Sunday"],
        activities: ["event setup, fliers, accounting"]
    },
    {
        fullName: "Julien Mataj",
        address: "525 Bixby Ct",
        email: "email@email.com",
        phoneNumber: "123-456-7890",
        availability: ["Monday", "Wednesday", "Friday"],
        activities: ['fliers', 'food']
    },
    {
        fullName: "Jackie Mataj",
        address: "525 Bixby Ct",
        email: "jacks@email.com",
        phoneNumber: "555-456-7890",
        availability: ["Tuesday", "Friday"],
        activities: ['planning', 'riding bikes']
    }
],

biography: "A lot about Elizabeth.",

imageGallery: {
        headShot: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fdf%2FKirsten_Gillibrand%252C_official_portrait%252C_112th_Congress.jpg%2F1200px-Kirsten_Gillibrand%252C_official_portrait%252C_112th_Congress.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKirsten_Gillibrand&docid=tLQiQBxHVPPfQM&tbnid=cExxXHUcVgkjBM%3A&vet=10ahUKEwjd2Zi1oKvbAhVuuVkKHQR9Ci0QMwg1KAEwAQ..i&w=1200&h=1520&bih=740&biw=756&q=Kirsten%20Gillibrand&ved=0ahUKEwjd2Zi1oKvbAhVuuVkKHQR9Ci0QMwg1KAEwAQ&iact=mrc&uact=8',
        familyPhoto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fc4%2FKirsten_Gillibrand_and_Family_-_Halloween_2009.jpg%2F220px-Kirsten_Gillibrand_and_Family_-_Halloween_2009.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKirsten_Gillibrand&docid=tLQiQBxHVPPfQM&tbnid=KzjuVOnY7x7CqM%3A&vet=10ahUKEwjam6bZoKvbAhUNwlkKHRVqB_YQMwg3KAAwAA..i&w=220&h=199&bih=740&biw=756&q=Kirsten%20Gillibrand%20family&ved=0ahUKEwjam6bZoKvbAhUNwlkKHRVqB_YQMwg3KAAwAA&iact=mrc&uact=8',
        constituentPhoto: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.kingscountypolitics.com%2Fwp-content%2Fuploads%2F2017%2F09%2FIMG_1400.jpg%3Fresize%3D500%252C375%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.kingscountypolitics.com%2Fgillibrand-medgar-evers-town-hall-addresses-daca-titile-ix-climate-change-education%2F&docid=2yMd4UT-vCY_GM&tbnid=2aXD5c6AeCat5M%3A&vet=10ahUKEwj5kP3xoKvbAhUuuVkKHXkkBqQQMwg0KAIwAg..i&w=500&h=375&bih=740&biw=756&q=kirsten%20gillibrand%20constituents&ved=0ahUKEwj5kP3xoKvbAhUuuVkKHXkkBqQQMwg0KAIwAg&iact=mrc&uact=8',
    },

missionStatement: "Through hard work, bold action, and a focus on helping others, Elizabeth is a public servant dedicated to bringing people together to create change.",

registerToVote: 'https://sos.tn.gov/products/elections/register-vote'
}

const changePoliticiacn = (propertyToChange, value) => {
     ElizabetheSanger[propertyToChange] = value;
}
changePoliticiacn('congressionalDistrict', '10');
console.log(ElizabetheSanger);

const changePlatformsStatements = (propertyToChange, nestedPropertyToChange, value) => {
    ElizabetheSanger[propertyToChange][nestedpropertyToChange] = value;
}

//let lizArticle = document.createElement('article')
//lizArticle.setAttribute('id', ElizabetheSanger.congressionalDistrict)

//const divRef = document.querySelector('#content-container')


//const updateCalendar = (objectToChange, propertyToChange, value) => {
  //  console.log(eventToChange.calendar[] = value)

//}

//function updateVolunteerInfo(propertyToChange, value) {
  //  volunteerInformation[propertyToChange] = value;
//}
//console.log(updateVolunteerInfo("fullName", "Faith Cox"));
