const countries_data =  [
	'Afghanistan',
		'Albania',
		'Algeria',
		'Andorra',
		'Angola',
		'Antigua and Barbuda',
		'Argentina',
		'Armenia',
		'Australia',
		'Austria',
		'Azerbaijan',
		'Bahamas',
		'Bahrain',
		'Bangladesh',
		'Barbados',
		'Belarus',
		'Belgium',
		'Belize',
		'Benin',
		'Bhutan',
		'Bolivia',
		'Bosnia and Herzegovina',
		'Botswana',
		'Brazil',
		'Brunei',
		'Bulgaria',
		'Burkina Faso',
		'Burundi',
		'Cambodia',
		'Cameroon',
		'Canada',
		'Cape Verde',
		'Central African Republic',
		'Chad',
		'Chile',
		'China',
		'Colombi',
		'Comoros',
		'Congo (Brazzaville)',
		'Congo',
		'Costa Rica',
		"Cote d'Ivoire",
		'Croatia',
		'Cuba',
		'Cyprus',
		'Czech Republic',
		'Denmark',
		'Djibouti',
		'Dominica',
		'Dominican Republic',
		'East Timor (Timor Timur)',
		'Ecuador',
		'Egypt',
		'El Salvador',
		'Equatorial Guinea',
		'Eritrea',
		'Estonia',
		'Ethiopia',
		'Fiji',
		'Finland',
		'France',
		'Gabon',
		'Gambia, The',
		'Georgia',
		'Germany',
		'Ghana',
		'Greece',
		'Grenada',
		'Guatemala',
		'Guinea',
		'Guinea-Bissau',
		'Guyana',
		'Haiti',
		'Honduras',
		'Hungary',
		'Iceland',
		'India',
		'Indonesia',
		'Iran',
		'Iraq',
		'Ireland',
		'Israel',
		'Italy',
		'Jamaica',
		'Japan',
		'Jordan',
		'Kazakhstan',
		'Kenya',
		'Kiribati',
		'Korea, North',
		'Korea, South',
		'Kuwait',
		'Kyrgyzstan',
		'Laos',
		'Latvia',
		'Lebanon',
		'Lesotho',
		'Liberia',
		'Libya',
		'Liechtenstein',
		'Lithuania',
		'Luxembourg',
		'Macedonia',
		'Madagascar',
		'Malawi',
		'Malaysia',
		'Maldives',
		'Mali',
		'Malta',
		'Marshall Islands',
		'Mauritania',
		'Mauritius',
		'Mexico',
		'Micronesia',
		'Moldova',
		'Monaco',
		'Mongolia',
		'Morocco',
		'Mozambique',
		'Myanmar',
		'Namibia',
		'Nauru',
		'Nepal',
		'Netherlands',
		'New Zealand',
		'Nicaragua',
		'Niger',
		'Nigeria',
		'Norway',
		'Oman',
		'Pakistan',
		'Palau',
		'Panama',
		'Papua New Guinea',
		'Paraguay',
		'Peru',
		'Philippines',
		'Poland',
		'Portugal',
		'Qatar',
		'Romania',
		'Russia',
		'Rwanda',
		'Saint Kitts and Nevis',
		'Saint Lucia',
		'Saint Vincent',
		'Samoa',
		'San Marino',
		'Sao Tome and Principe',
		'Saudi Arabia',
		'Senegal',
		'Serbia and Montenegro',
		'Seychelles',
		'Sierra Leone',
		'Singapore',
		'Slovakia',
		'Slovenia',
		'Solomon Islands',
		'Somalia',
		'South Africa',
		'Spain',
		'Sri Lanka',
		'Sudan',
		'Suriname',
		'Swaziland',
		'Sweden',
		'Switzerland',
		'Syria',
		'Taiwan',
		'Tajikistan',
		'Tanzania',
		'Thailand',
		'Togo',
		'Tonga',
		'Trinidad and Tobago',
		'Tunisia',
		'Turkey',
		'Turkmenistan',
		'Tuvalu',
		'Uganda',
		'Ukraine',
		'United Arab Emirates',
		'United Kingdom',
		'United States',
		'Uruguay',
		'Uzbekistan',
		'Vanuatu',
		'Vatican City',
		'Venezuela',
		'Vietnam',
		'Yemen',
		'Zambia',
		'Zimbabwe'
	 ];








document.addEventListener("DOMContentLoaded", function () {

document.body.style.fontFamily = 'Roboto, sans-serif';

let header = document.createElement('header');
header.style.background = 'images/globe-2.jpg';
document.body.appendChild(header);

let container = document.createElement('div');
container.classList.add('container');
container.style.margin = '0 auto';
container.style.textAlign = 'center';
header.appendChild(container);

let h1 = document.createElement('h1');
h1.textContent = 'WORLD COUNTRIES LIST';
h1.style.letterSpacing = '14px';
h1.style.paddingTop = '100px';
h1.style.color = 'white';
h1.style.fontSize = '40px';
h1.style.fontWeight = 'bold';
container.appendChild(h1);

let h3 = document.createElement('h3');
h3.textContent = `Total Number of Countries: ` + countries_data.length;
h3.style.fontSize = '20px';
h3.style.fontWeight = 'bold';
h3.style.paddingTop = '20px';
h3.style.color = 'white';
container.appendChild(h3);

let divRes = document.createElement('div');
divRes.classList.add('divRes');
divRes.innerHTML = ' ';
container.appendChild(divRes);

let divButtons = document.createElement('div');
divButtons.classList.add('buttons');
header.appendChild(divButtons);

let button1 = document.createElement('button');
button1.classList.add('button-start');
button1.setAttribute('id', 'button1');
divButtons.appendChild(button1);
let button2 = document.createElement('button');
button2.classList.add('button-start');
button2.setAttribute('id', 'button2');
divButtons.appendChild(button2);
button1.textContent = 'STARTING WORD';
button2.textContent = 'SEARCH WITH ANY WORD';
let filter = document.createElement('button');
filter.classList.add('button-filter');
filter.setAttribute('id', 'toggleButton');
divButtons.appendChild(filter);
		let button1Pressed = false;
		let button2Pressed = false;
		let isPressed = false;


		let searchBlock = document.createElement('div');
		searchBlock.classList.add('searchBlock');
		header.appendChild(searchBlock);
		let search = document.createElement('input');
		search.classList.add('search');
		search.setAttribute('type', 'search');
		search.setAttribute('id', 'search');
		search.setAttribute('placeholder', 'Type here to search');
		searchBlock.appendChild(search);

	

		let divResult = []
		let debounceTimeout;
		let main = document.createElement('main');
		main.classList.add('main');
		document.body.appendChild(main);
		search.addEventListener('input', function () {
			clearTimeout(debounceTimeout);
			debounceTimeout = setTimeout(() => {
			let query = this.value.toLowerCase();
			if (query){
			 divResult = countries_data.filter(item => item.toLowerCase().includes(query));
			 divRes.innerHTML = 'You are searching for:' + query + '. Found ' + divResult.length + '.';
			} else {
				divResult = [];
				divRes.innerHTML = '';
			
			}
		
			if(divResult.length > 0){
				main.innerHTML = '';
				divResult.forEach(item => {
					main.innerHTML += `<div class="country">${item}</div>`
				})
			} else {
				divResult = [];
				main.innerHTML = '';
			}
			}, 300);
		});

	button1.addEventListener('click', function () {
		
		let query = document.getElementById('search').value.toLowerCase();
		main.innerHTML = '';

		if(query) {
			divResult = countries_data.filter(item => item.toLowerCase().startsWith(query));
			divRes.innerHTML = 'You are searching for:' + query + '. Found ' + divResult.length + '.';
			if(divResult.length > 0){
				main.innerHTML = '';
				divResult.forEach(item => {
					main.innerHTML += `<div class="country">${item}</div>`
				})
			} else {
				divResult = [];
				main.innerHTML = '';
			}
		} else {
			divResult = [];
			main.innerHTML = '';
		}
		
		});
		
		
		



	button2.addEventListener('click', function () {

		let query = document.getElementById('search').value.toLowerCase();
		main.innerHTML = '';
		if(query) {
			divResult = countries_data.filter(item => item.toLowerCase().includes(query));
			divRes.innerHTML = 'You are searching for:' + query + '. Found ' + divResult.length + '.';
			if(divResult.length > 0){
				main.innerHTML = '';
				divResult.forEach(item => {
					main.innerHTML += `<div class="country">${item}</div>`
				})
			} else {
				divResult = [];
				main.innerHTML = '';
			}
		} else {
			divResult = [];
			main.innerHTML = '';
		}

	});

	
	let sortAscending = true;

	filter.addEventListener('click', function () {
		main.innerHTML = '';
		
		divResult.sort((a,b) => {
			if(sortAscending) {
				filter.style.backgroundImage = 'url("images/hover-up.jpg")';
				return b.localeCompare(a);
				
			} else {
				filter.style.backgroundImage = 'url("images/hover-down.jpg")';
				return a.localeCompare(b);
			}
		});

		if(divResult.length > 0){
			main.innerHTML = '';
			divResult.forEach(item => {
				main.innerHTML += `<div class="country">${item}</div>`
			})
		} else {
			divResult = [];
			main.innerHTML = '';
		}

		sortAscending = !sortAscending;
	});

});



