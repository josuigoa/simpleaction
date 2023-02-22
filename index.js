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
        return new Promise((resolve, reject) => {
            currentState.text = `Clicked at ${Date.now()}`;
            this.server.dialog.info('Extra! Extra!', `A simple hello from a simple action! My name is [${this.props.name}]!`);
            resolve(currentState);
        });
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
            props: [{
                name: "name",
                type: "String",
                isShared: false,
                defaultValue: "ideckia",
                description: "A name shown in the window",
                values: []
            }]
        };
    }
}

exports.IdeckiaAction = Simpleaction;