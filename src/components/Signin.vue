<template>
    <div class="signin">
        <v-container fluid>
            <v-layout row justify-center>
                <v-flex xs12 sm6 md4>
                    <v-card elevation="5" class="pa-5">
                        <v-flex class="text-xs-center" mb-3>
                            <h1>Sign In</h1>
                        </v-flex>
                        <form>
                            <v-layout column>
                                <v-flex>
                                    <v-text-field name="email" label="Email" id="email" type="email"
                                        required></v-text-field>
                                </v-flex>
                                <v-flex>
                                    <v-text-field name="password" label="Password" id="password" type="password"
                                        required></v-text-field>
                                </v-flex>
                                <v-flex class="text-xs-center" mt-4>
                                    <v-btn color="primary" type="submit" block>Sign In</v-btn>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "signin",
};
</script>

<style scoped>
.signin {
    margin-top: 250px;
}

.v-card {
    max-width: 200%;
    border-radius: 10px;
}
</style>