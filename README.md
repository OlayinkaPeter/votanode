# Votanode

A simple Node/Express API backend for a small number of political parties, candidates, and their offices in Nigeria. 
Operations are all handled with bare SQL queries.

## Be sure to:
* Get Node running
* Have installed Postman to test API
* Import vodanote.sql into your phpMyAdmin

# Endpoints For API Use
Note the the request should contain the header

```Content-Type: application/json```

## Parties
**GET request** for all parties

```localhost:3000/parties```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/parties.png"
</p>



**POST request** to add a party

```localhost:3000/party/add```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/addparty.png"
</p>



**POST request** to edit a party

```localhost:3000/party/edit/:id```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/editparty.png"
</p>



**GET request** to delete a party

```localhost:3000/party/delete/:id```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/deleteparty.png"
</p>




## Candidates
**GET request** for all candidates

```localhost:3000/candidates```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/candidates.png"
</p>



**POST request** to add a candidate

```localhost:3000/candidate/add```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/addcandidate.png"
</p>



**POST request** to edit a candidate

```localhost:3000/candidate/edit/:id```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/editcandidate.png"
</p>



**GET request** to delete a candidate

```localhost:3000/candidate/delete/:id```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/deletecandidate.png"
</p>




## Offices
**GET request** for all offices

```localhost:3000/offices```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/offices.png"
</p>



**POST request** to add a office

```localhost:3000/office/add```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/addoffice.png"
</p>



**POST request** to edit a office

```localhost:3000/office/edit/:id```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/editoffice.png"
</p>



**GET request** to delete a office

```localhost:3000/office/delete/:id```

**Response**
<p align="center">
<img src="https://github.com/OlayinkaPeter/votanode/blob/master/screenshots/deleteoffice.png"
</p>





## Thank you
