{ renderElement, testdom, mockModule, disableMocks } = require './helpers'

describe "Layout Container", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-breadcrumb"
    ]

    @Component = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> testdom "<html><body></body></html>"

  describe "General", ->
    Given ->
      @levels =
        current: "bar"
        foo: "1"
        bar: "1"
        baz: false

    When  ->
      subject  = renderElement @Component, { @levels }
      @classes = subject.className.split ' '
      @breadcrumbs = subject.querySelectorAll '.mock'

    Then  -> @classes.includes "breadcrumbs"
    Then  -> @breadcrumbs.length == 2
