export class Recipe {
    public recipeName: string | undefined;
    public recipeDescription: string | undefined;
    public recipeImagePath: string | undefined;

    constructor(name: string, description: string, imagePath: string) {
        this.recipeName = name;
        this.recipeDescription = description;
        this.recipeImagePath = imagePath;
    }

}