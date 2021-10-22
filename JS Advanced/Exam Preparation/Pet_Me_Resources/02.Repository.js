function solve() {
    let id = 0;

    class Repository {
        constructor(props) {
            this.props = props;
            this.data = new Map();
        }

        add(entity) {
            if(Object.keys(entity).length > Object.keys(this.props).length){
                throw new Error(`Property ${key} is missing from the entity!`) // ==> get key from entity
            }

            if(isValidEntity(entity,this.props)){
                this.data.set(id++,entity);
                return id - 1;
            }
        }

        update(inputId,entity){
            if(!this.data.has(inputId)){
                throw new Error(`Entity with id: ${inputId} does not exist!`);
            }

            if(isValidEntity(entity,this.props)){
                this.data.set(inputId,entity);
            }
        }

        del(inputId){
            if(!this.data.has(inputId)){
                throw new Error(`Entity with id: ${inputId} does not exist!`);
            }

            this.data.delete(inputId);
        }

        get(inputId){
            return this.data.get(inputId);
        }

        get count(){
            return this.data.size;
        }

    }

    function isValidEntity(entity,props){
        let propsKeys = Object.keys(props);
        for(let key of propsKeys){
            if(!entity.hasOwnProperty(key)){
                throw new Error (`Property ${key} is missing from the entity!`);
            }

            if(props[key] !== typeof entity[key]){
                throw new Error (`Property ${key} is of incorrect type!`);
            }
        }

        return true;
    }

    return Repository;
}