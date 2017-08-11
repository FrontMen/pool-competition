import React from 'react';
import Dialog from '../templates/Dialog';
import Paragraph from "../atoms/Paragraph";


class Loading extends React.Component {
    constructor() {
        super();
    }

    render() {
        /* TODO spinner/loader molecule */
        return (
            <div className="pag__loading">
                <Dialog>
                    <Paragraph>Hold on...</Paragraph>
                </Dialog>
            </div>

        )
    }
}
export default Loading;