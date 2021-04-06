class Iron{
	constructor(x,y,r)
	{
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30
		};
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x,this.y,100,40,options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("blue");
			fill("orange");
			rect(0,0,100,40)
			pop()
	}

}