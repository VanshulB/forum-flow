import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import MikroOrmConfig from "./mikro-orm.config";

const main = async () => {
	const orm = await MikroORM.init(MikroOrmConfig);
	await orm.getMigrator().up();
	const emFork = orm.em.fork();

	const post = emFork.create(Post, {
		title: 'my first post',
		createdAt: "",
		updatedAt: ""
	});
	await emFork.persistAndFlush(post)

	const posts = await emFork.find(Post, {});
	console.log(posts);
};

main().catch((err) => {
	console.error(err);
})
