# resize-rhythm
Resize-rhythm keeps your vertical rhythm when responsive elements(e.g. images) are resized, without changing any of the elements dimensions. Simple and small, it just requires appending a jquery method to any element.

## How it Works
Resize-rhythm measures the height of an element when the window resizes and adds the necessary margin-bottom to keep whatever vertical rhythm you supply.

## Usage  

$( selector ).resize-rhythm([height])`

### Examples
Apply to all images with a 12px baseline  
`$( 'img' ).resize-rhythm(12)`

Apply to a single ID'd element with a 25px baseline  
`$( '#my-id' ).resize-rhythm(12)`
