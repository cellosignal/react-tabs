import React, { PureComponent } from 'react';
import { Tab, Tabs } from '@cellosignal/react-tabs';

export default class SimpleExample extends PureComponent {
    render() {
        // Dummy content
        const examples = [
            {
                title: 'This is an example',
                content: 'This is the content of the first tab'
            },
            {
                title: 'This is the second one',
                content: 'This is more exciting content'
            }
        ];

        return (
            <section>
                <Tabs className="my-tabs" contentClassName="my-tabs__content" toggleClassName="my-tabs__toggle" tabListClassName="my-tabs__tablist" iconColor="#26EDC1">
                    {
                        // Map over each tab, however, you could write them individually as well
                        examples.map(example => (
                            <Tab title={example.title} className="my-tabs__tab" activeClassName="my-tabs__tab--active">
                                <p>{example.content}</p>
                            </Tab>
                        ))
                    }
                </Tabs>
            </section>
        );
    }
}
