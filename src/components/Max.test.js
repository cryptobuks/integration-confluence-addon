import React from 'react'
import renderer from 'react-test-renderer'
import Max from './Max'

it('renders correctly', () => {
  const previewImgUrl = 'https://s3.invisionapp-cdn.com/storage.invisionapp.com/screens/thumbnails/235857145.png?x-amz-meta-iv=2&response-cache-control=max-age%3D2419200&x-amz-meta-mdi=0&x-amz-meta-ck=7b6ac614880f2a6dcb831703094006aa&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1506816000&Signature=xSZfe1UhbXL%2FbsWq%2F5jn%2FuhT0Fc%3D'
  const projectName = 'Paper embed prototypes'
  const shareUrl = 'https://in.invisionapp.com/share/ATBWCTHR5'
  const tree = renderer.create(
    <Max previewImgUrl={previewImgUrl} projectName={projectName} shareUrl={shareUrl} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
