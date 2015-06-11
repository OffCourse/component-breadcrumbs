require './helpers'

describe "Breadcrumbs Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-breadcrumb"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @levels = { current: "bar", foo: "1", bar: "1", baz: false }
    @selectLevel = () -> 

  When  -> 
    @subject  = renderElement @Component, { @levels, @selectLevel }

  Then  -> 
    classes = @subject.className.split ' '
    classes.includes "breadcrumbs"
  And   ->
    args  = { current: "bar", level: ['foo', "1"], @selectLevel }
    expect(@spy.getCall(0).args[0]).to.deep.equal(args)
  And   ->
    args  = { current: "bar", level: ['bar', "1"], @selectLevel }
    expect(@spy.getCall(1).args[0]).to.deep.equal(args)
