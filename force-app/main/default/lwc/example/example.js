import { LightningElement, track } from 'lwc';


//export default class Example extends LightningElement {}

import React from 'react';

import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Popover from '@salesforce/design-system-react/components/popover'; 
import Button from '@salesforce/design-system-react/components/button';

//class Example extends React.Component {
    export default class Example extends LightningElement {
	static displayName = 'PopoverExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<Popover
					align="top left"
					body={
						<div>
							<p className="slds-p-bottom_x-small">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
								in pretium leo. Praesent quis risus eget libero commodo mollis.
							</p>
							<p className="slds-p-bottom_x-small">
								Quisque tincidunt eleifend pharetra. Etiam condimentum neque nec
								neque interdum, vitae dapibus est accumsan. Vestibulum rhoncus
								consectetur mi, sit amet interdum purus. Suspendisse rhoncus,
								orci a mattis rhoncus, nulla lacus pharetra orci, in eleifend at
								tristique nisi tristique.
							</p>
							<p className="slds-p-bottom_x-small">
								Pellentesque magna tellus, dapibus vitae placerat nec, viverra
								vel mi.{' '}
								<a href="javascript:void(0);" title="Learn More">
									Learn More
								</a>
							</p>
						</div>
					}
					heading="Review warning"
					id="popover-error"
					variant="warning"
					{...this.props}
				>
					<Button label="Trigger Popover" />
				</Popover>
			</IconSettings>
		);
	}
}

ReactDOM.render(<Example />, mountNode);
