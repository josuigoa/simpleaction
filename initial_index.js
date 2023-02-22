class Simpleaction {

    setup(props, server) {
        this.props = props == null ? {} : props;
        this.server = server;
    }

    init(initialState) {
        return new Promise((resolve, reject) => {
            resolve(initialState);
        });
    }

    execute(currentState) {
        throw 'Not implemented';
        // return new Promise((resolve, reject) => {
        // 		resolve(currentState);
        // });
    }

    onLongPress(currentState) {
        return new Promise((resolve, reject) => {
            resolve(currentState);
        });
    }

    getActionDescriptor() {
        return {
            name: "simpleaction",
            description: "Demo of a simple Ideckia action",
            // props : [{
            // 	name : "propertyName",
            // 	type : "String",
            // 	isShared : false,
            //	defaultValue: "default value",
            // 	description : "property description",
            // 	values : ["possible", "values", "for the property"]
            // }]
        };
    }
}

exports.IdeckiaAction = Simpleaction;