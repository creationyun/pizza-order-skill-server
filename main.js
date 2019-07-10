const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/menuOrder', function(req, res) {
	var params = req.body.action.params;
	
	const responseBody = {
		version: "2.0",
		template: {
			outputs: [
				{
					simpleText: {
						text: params.menu + " " + params.num + "판 주문 완료"
					}
				}
			]
		}
	};
	
	res.status(200).send(responseBody);
});

app.listen(3000, function() {
	console.log('Example skill server listening on port 3000!');
});