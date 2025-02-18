


require('./src/tools-for-instagram.js');

(async () => {

    console.log("\n1 -- LOGIN --\n".bold.underline);
    let ig = await login();

    console.log("\n2 -- Get User Info -- \n".bold.underline);
    let info = await getUserInfo(ig, "test1400_");
    console.log("User information, username: " + info.username);

    
    console.log("\n3 -- Get Followers in .json file -- \n".bold.underline);
    console.log("You can specify a max of iterations, like getFollowers(ig, Instargram, iterations = 2)\nEach iteration gets around 10.000 accounts".yellow);
    await getFollowers(ig, document.getElementById(inputUsername).value);



    
    /*console.log("\n5 -- Trying to get recent hashtag list and like the first item -- \n".bold.underline);
    let posts = await recentHashtagList(ig, "dogs");
    await likePost(ig, posts[0]);

    
    console.log("\n6 -- Trying to get top hashtag list and like the first item -- \n".bold.underline);
    posts = await topHashtagList(ig, "trump");
    await likePost(ig, posts[0]);


    
    console.log("\n7 -- Trying to get recent location list and like the first item -- \n".bold.underline);
    console.log("Getting the most accurated Location...\n[To get a randomized location of the search result specify 'true' at the end of function]\n- Example: recentLocationList(ig, 'Spain', true);".yellow);
    posts = await recentLocationList(ig, "Spain");
    await likePost(ig, posts[0]);

    
    console.log("\n8 -- Trying to get top location list and like the first item -- \n".bold.underline);
    console.log("Getting the most accurated Location...\n[To get a randomized location of the search result specify 'true' at the end of function]\n- Example: recentLocationList(ig, 'Spain', true);".yellow);
    posts = await topLocationList(ig, "iran");
    await likePost(ig, posts[0]);

    
    console.log("\n-- 9: Saving posts into a file \n".bold.underline);
    posts = await recentHashtagList(ig, "dogs");
    await savePosts(ig, posts, "dogs_posts");
    posts = await recentHashtagList(ig, "cats");
    await savePosts(ig, posts, "cats_posts");

    
    console.log("\n-- 10: Follow User by username--\n".bold.underline);
    await followUser(ig, 'ali');
    await sleep(5);

    
    console.log("\n-- 11: Unfollow User by username --\n".bold.underline);
    await unfollowUser(ig, 'maryam');
    
    let post = await recentHashtagList(ig, "matrix");
    await commentMediaId(ig, posts[0].pk, "Amazing!");*/

  

    console.log("\nProcess done!\n".green);

    // If ONLINE_MODE is enabled, this example will run until we send an exit signal
    process.exit();
    
})();
