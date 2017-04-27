<template>
    <div class="container-fuild">
        <section v-for="company in companys">
            <router-link :to="'/company_info/' + company.id">
            	<h5>{{ company.name_cn }}</h5>
            </router-link>
        </section>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				companys: []
			}
		},
		created(){
			let keyword = this.$route.params.name
			if (!keyword) {
				return
			}

			fetch('http://localhost:8000/api/easy_companies/?search=' + keyword)
			.then(res => {
				res.json().then(data => {
                    console.log(data)
                    if (data.status_code == 0){
					   this.companys = data.data
                    }
				});
			});
		}
	}
</script>
<style scoped>
        body, p, h5, section{
            margin: 0;
            padding: 0;
        }
        body{
            padding-bottom: 15px;
        }
        section{
            border-bottom: 1px solid #ddd;
            padding: 15px;
        }
        section> a{
            text-decoration: none!important;
            color: #333!important;
        }
        section p {
            padding: 3px 20px;
            margin: 0;
            color:#666;
            font-size: 12px;
        }
        h5{
            padding: 3px 5px;
            font-weight: 400;
        }

        h5:before{
            content:'';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 2px solid #00a0e8;
            vertical-align: baseline;
            margin-right: 5px;
        }
    </style>