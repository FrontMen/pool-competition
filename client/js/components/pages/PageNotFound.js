import React from 'react';
import Dialog from '../templates/Dialog';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import Button from '../atoms/Button';

class PageNotFound extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="pag__page-not-found">
                <Dialog>
                    <Header level="1">Page not found.</Header>
                    <Paragraph>
                        Whoops, we could not find the page you requested. Sorry about that.
                    </Paragraph>
                    <Button link="/" label="Take me home!" />
                </Dialog>

            </div>

        )
    }
}
export default PageNotFound;