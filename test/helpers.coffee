React = require 'react/addons'
{ jsdom } = require 'jsdom'
mockery = require 'mockery'

TestUtils = React.addons.TestUtils
{div} = React.DOM

`function testdom(markup){
  if (typeof document !== 'undefined') return
  global.document = jsdom(markup || '')
  global.window = document.defaultView;
  global.navigator = {};
}`

renderElement = (Component, options) ->
  element = React.createElement Component, options
  container = TestUtils.renderIntoDocument element
  React.findDOMNode container

mockModule = (moduleUnderTest, mockModules) ->
  mockery = require 'mockery'
  mockery.registerAllowables [
    moduleUnderTest, 
    'react', 
    './lib/React', 
    'classnames',
    'ramda'
  ]
  mockComponents = [One, Two, Three]
  mockModules.forEach (name, index) =>
    mockery.registerMock name, mockComponents[index % 3]
  mockery.enable
    warnOnReplace: false,
    warnOnUnregistered: true
  require moduleUnderTest

disableMocks = =>
  mockery.disable()

class MockComponent extends React.Component

  constructor: ->
    super

  render: -> 
    (div {className: "mock #{@name}" } )

class One extends MockComponent 

  constructor: ->
    super
    @name = "mock_one"

class Two extends MockComponent 

  constructor: ->
    super
    @name = "mock_two"

class Three extends MockComponent 

  constructor: ->
    super
    @name = "mock_three"


module.exports = { testdom, renderElement, mockModule, disableMocks }
